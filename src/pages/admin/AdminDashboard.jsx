import { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { getAllUsers, approveUser, rejectUser, getDashboardData } from '../../services/adminService';
import { getAllWorks } from '../../services/workService';
import { useToast } from '../../context/ToastContext';
import { IconDoc, IconMessage, IconUsers, IconCalendar, IconCheck, IconClose, IconHeart } from '../../components/icons';
import { Link } from 'react-router-dom';
import './AdminLayout.css';

export function AdminDashboard() {
  const [stats, setStats] = useState({ totalPosts: 0, totalComments: 0, totalUsers: 0, pendingUsers: 0 });
  const [pendingUsersList, setPendingUsersList] = useState([]);
  const [recentWorks, setRecentWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);
        const dashboardStats = await getDashboardData();
        setStats(dashboardStats);

        const [pendingData, worksData] = await Promise.all([
          getAllUsers('pending', 0, 5),
          getAllWorks(null, 5)
        ]);
        
        setPendingUsersList(pendingData || []);
        setRecentWorks(worksData || []);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
        showToast("Erro ao carregar dados. Você tem permissão de Admin?", "error");
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, [showToast]);

  const handleApprove = async (id) => {
    try {
      await approveUser(id);
      showToast("Usuário aprovado com sucesso!", "success");
      setPendingUsersList(pendingUsersList.filter(u => u.id !== id));
      setStats(s => ({ ...s, pendingUsers: s.pendingUsers - 1, totalUsers: s.totalUsers + 1 }));
    } catch (error) {
      console.error("Erro ao aprovar:", error); 
      showToast("Erro ao aprovar usuário.", "error");
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectUser(id);
      showToast("Usuário rejeitado.", "success");
      setPendingUsersList(pendingUsersList.filter(u => u.id !== id));
      setStats(s => ({ ...s, pendingUsers: s.pendingUsers - 1 }));
    } catch (error) {
      console.error("Erro ao rejeitar:", error); 
      showToast("Erro ao rejeitar usuário.", "error");
    }
  };

  const statCards = [
    { label: 'Total de Posts', value: stats.totalPosts || 0, icon: <IconDoc size={28} />, color: '#d62828', link: '/admin/posts' },
    { label: 'Comentários', value: stats.totalComments || 0, icon: <IconMessage size={28} />, color: '#2563eb', link: '/admin/comentarios' },
    { label: 'Usuários', value: stats.totalUsers || 0, icon: <IconUsers size={28} />, color: '#16a34a', link: '/admin/usuarios' },
    { label: 'Pendentes', value: stats.pendingUsers || 0, icon: <IconCalendar size={28} />, color: '#f77f00', link: '/admin/usuarios' },
  ];

  if (loading) {
    return <AdminLayout><h1 className="admin-page-title">Carregando painel...</h1></AdminLayout>;
  }

  return (
    <AdminLayout>
      <h1 className="admin-page-title">Painel de Administração</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 32 }}>
        {statCards.map(stat => (
          <Link to={stat.link} key={stat.label} style={{ textDecoration: 'none' }}>
            <div className="admin-card" style={{ borderLeft: `4px solid ${stat.color}`, cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: 8, color: stat.color }}>{stat.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: '#6b778c', fontWeight: 500 }}>{stat.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {pendingUsersList.length > 0 && (
        <div className="admin-card" style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ color: '#0a2a57', fontSize: 18, fontWeight: 700, display: 'flex', gap: 8, alignItems: 'center' }}>
              <IconCalendar size={20} /> Cadastros Pendentes
            </h2>
            <Link to="/admin/usuarios" style={{ color: '#d62828', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Ver todos →</Link>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pendingUsersList.slice(0, 3).map(u => (
                <tr key={u.id}>
                  <td style={{ fontWeight: 600 }}>{u.name}</td>
                  <td>{u.email}</td>
                  <td style={{ display: 'flex', gap: 8 }}>
                    <button className="action-btn btn-approve" onClick={() => handleApprove(u.id)} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      <IconCheck size={14} /> Aprovar
                    </button>
                    <button className="action-btn btn-reject" onClick={() => handleReject(u.id)} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      <IconClose size={14} /> Rejeitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ color: '#0a2a57', fontSize: 18, fontWeight: 700, display: 'flex', gap: 8, alignItems: 'center' }}>
            <IconDoc size={20} /> Posts Recentes
          </h2>
          <Link to="/admin/posts" style={{ color: '#d62828', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Ver todos →</Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoria</th>
              <th>Curtidas</th>
            </tr>
          </thead>
          <tbody>
            {recentWorks.slice(0, 5).map(post => (
              <tr key={post.id}>
                <td style={{ fontWeight: 600, maxWidth: 240 }}>{post.title}</td>
                <td>{post.author}</td>
                <td><span className="badge badge-active">{post.type}</span></td>
                <td style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <IconHeart size={16} color="#d62828" /> {post.likeCount || 0}
                </td>
              </tr>
            ))}
            {recentWorks.length === 0 && (
              <tr><td colSpan="4" style={{textAlign:'center', padding:20}}>Nenhum post encontrado.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}