import { useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { LayoutDashboard, FolderKanban, GitBranch, MessageSquare, Sparkles, Video, Users, Settings, Bell, Search, Menu, X, Eye } from 'lucide-react'
import { Logo, UserAvatar } from '../components/common/ui.jsx'
import { users, workspaces } from '../data/mock.js'

export default function AppShell() {
  const [open, setOpen] = useState(false)
  const [bell, setBell] = useState(false)
  const { workspaceId } = useParams()
  const ws = workspaces.find(w => w.id === workspaceId)
  const base = ws ? `/workspace/${ws.id}` : null
  const item = (to, Icon, label, end) => <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)}
    className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-150 ${isActive ? 'bg-brand text-white' : 'text-slate-300 hover:bg-navy-2 hover:text-white'}`}><Icon size={17} />{label}</NavLink>
  const nav = <nav className="flex h-full flex-col bg-navy p-4">
    <div className="mb-6 flex items-center justify-between"><Logo dark /><button className="text-slate-300 lg:hidden" aria-label="Close menu" onClick={() => setOpen(false)}><X size={20} /></button></div>
    <div className="space-y-1">{item('/dashboard', LayoutDashboard, 'Dashboard')}</div>
    <p className="mb-2 mt-6 px-3 text-xs font-medium text-slate-400">{ws ? ws.name : 'Workspaces'}</p>
    <div className="space-y-1">{ws ? <>
      {item(base, Eye, 'Overview', true)}{item(base + '/tasks', FolderKanban, 'Tasks')}{item(base + '/github', GitBranch, 'GitHub')}
      {item(base + '/chat', MessageSquare, 'Chat')}{item(base + '/ai', Sparkles, 'AI Assistant')}{item(base + '/meetings', Video, 'Meetings')}
      {item(base + '/members', Users, 'Members')}{item(base + '/settings', Settings, 'Settings')}</>
      : workspaces.map(w => item(`/workspace/${w.id}`, FolderKanban, w.name))}</div>
  </nav>
  return <div className="min-h-screen">
    <aside className="fixed inset-y-0 left-0 hidden w-60 lg:block">{nav}</aside>
    {open && <div className="fixed inset-0 z-40 lg:hidden"><div className="absolute inset-0 bg-navy/60" onClick={() => setOpen(false)} /><aside className="absolute inset-y-0 left-0 w-64">{nav}</aside></div>}
    <div className="lg:pl-60">
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-line bg-white px-4 py-3 sm:px-6">
        <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={22} /></button>
        <div className="relative max-w-md flex-1"><Search size={16} className="absolute left-3 top-2.5 text-faint" />
          <input aria-label="Search" placeholder="Search tasks, files, people…" className="w-full rounded-lg border border-line bg-canvas py-2 pl-9 pr-3 text-sm" /></div>
        <div className="relative ml-auto">
          <button aria-label="Notifications" onClick={() => setBell(!bell)} className="relative rounded-lg p-2 hover:bg-canvas"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" /></button>
          {bell && <div className="absolute right-0 mt-2 w-72 rounded-xl border border-line bg-white p-2 shadow-lg">
            {['Rahul assigned you "Fix authentication API"', 'Manu pushed 3 commits', 'Team Standup starts in 30 minutes'].map(n => <div key={n} className="rounded-lg p-2.5 text-[13px] hover:bg-canvas">{n}</div>)}</div>}
        </div>
        <UserAvatar user={users[0]} size={32} />
      </header>
      <main className="mx-auto max-w-6xl p-4 sm:p-8"><Outlet /></main>
    </div>
  </div>
}
