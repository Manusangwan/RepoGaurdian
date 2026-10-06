import { Link } from 'react-router-dom'
import { Plus, FolderKanban, ListChecks, Mail, CalendarClock } from 'lucide-react'
import { Button, Card, PageHeader, StatusBadge, UserAvatar } from '../components/common/ui.jsx'
import { users, workspaces, activity, meetings } from '../data/mock.js'
const stats = [[FolderKanban, 3, 'Active Workspaces'], [ListChecks, 12, 'Total Tasks'], [Mail, 5, 'Pending Invitations'], [CalendarClock, 2, 'Upcoming Meetings']]
export default function Dashboard() {
  return <>
    <PageHeader title="Good morning, Manu! 👋" subtitle="Here's what's happening in your workspaces." actions={<Button><Plus size={15} />Create Workspace</Button>} />
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{stats.map(([I, n, l]) => <Card key={l} className="flex items-center gap-3 p-4">
      <span className="rounded-lg bg-indigo-50 p-2.5 text-brand"><I size={18} /></span><div><div className="text-2xl font-bold leading-none">{n}</div><div className="mt-1 text-xs text-sub">{l}</div></div></Card>)}</div>
    <h2 className="mb-3 mt-8 text-base font-semibold">Your workspaces</h2>
    <div className="grid gap-4 md:grid-cols-3">{workspaces.map(w => <Link key={w.id} to={`/workspace/${w.id}/tasks`}>
      <Card className="p-4 transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-start justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy font-bold text-white">{w.name[0]}</span><StatusBadge status={w.status} /></div>
        <h3 className="mt-3 font-semibold">{w.name}</h3><p className="text-xs text-sub">{w.type}</p>
        <div className="mt-4 flex items-center justify-between"><div className="flex -space-x-2">{users.map(u => <UserAvatar key={u.id} user={u} size={24} />)}</div><span className="text-xs text-sub">{w.members} members</span></div></Card></Link>)}</div>
    <div className="mt-8 grid gap-4 lg:grid-cols-5">
      <Card className="p-5 lg:col-span-3"><h2 className="mb-3 text-base font-semibold">Recent activity</h2>
        {activity.map(a => <div key={a.id} className="flex items-center gap-3 border-t border-line py-3 first:border-0"><UserAvatar user={users.find(u => u.id === a.who)} />
          <p className="flex-1 text-[13px]"><b>{users.find(u => u.id === a.who).name.split(' ')[0]}</b> {a.text}</p><span className="text-xs text-faint">{a.time}</span></div>)}</Card>
      <Card className="p-5 lg:col-span-2"><h2 className="mb-3 text-base font-semibold">Upcoming meetings</h2>
        {meetings.map(m => <div key={m.id} className="flex items-center justify-between border-t border-line py-3 first:border-0"><div><div className="text-[13px] font-semibold">{m.title}</div><div className="text-xs text-sub">{m.when}</div></div>
          <Button variant={m.action === 'Join' ? 'primary' : 'secondary'} className="!px-3 !py-1.5">{m.action}</Button></div>)}</Card></div>
  </>
}
