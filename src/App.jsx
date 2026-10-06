import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './layouts/AppShell.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import Placeholder from './pages/Placeholder.jsx'
export default function App() {
  return <Routes>
    <Route path="/login" element={<Login />} /><Route path="/register" element={<Login />} /><Route path="/forgot-password" element={<Login />} />
    <Route element={<AppShell />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workspace/:workspaceId" element={<Placeholder />} />
      <Route path="/workspace/:workspaceId/tasks" element={<Tasks />} />
      {['github', 'chat', 'ai', 'meetings', 'members', 'settings'].map(p => <Route key={p} path={`/workspace/:workspaceId/${p}`} element={<Placeholder />} />)}
      <Route path="/profile" element={<Placeholder />} /><Route path="/settings" element={<Placeholder />} />
    </Route>
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
}
