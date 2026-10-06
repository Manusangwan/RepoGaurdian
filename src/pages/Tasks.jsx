import { useState } from 'react'
import { Plus, MessageSquare } from 'lucide-react'
import { Button, Card, Input, Modal, PageHeader, PriorityBadge, Badge, UserAvatar } from '../components/common/ui.jsx'
import { initialTasks, users } from '../data/mock.js'
const cols = [['todo', 'TODO'], ['progress', 'IN PROGRESS'], ['testing', 'TESTING'], ['done', 'DONE']]
export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [open, setOpen] = useState(false)
  const [over, setOver] = useState(null)
  const move = (id, status) => setTasks(t => t.map(x => x.id === id ? { ...x, status } : x))
  const create = e => { e.preventDefault(); const f = new FormData(e.target)
    setTasks(t => [...t, { id: 't' + Date.now(), title: f.get('title'), priority: f.get('priority'), assignee: f.get('assignee'), due: f.get('due') || 'No date', status: 'todo', label: 'New', comments: 0 }]); setOpen(false) }
  return <>
    <PageHeader title="Tasks" subtitle="Smart Campus Assistant — drag cards between columns" actions={<Button onClick={() => setOpen(true)}><Plus size={15} />Create Task</Button>} />
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">{cols.map(([k, label]) => <section key={k} aria-label={label}
      onDragOver={e => { e.preventDefault(); setOver(k) }} onDragLeave={() => setOver(null)} onDrop={e => { move(e.dataTransfer.getData('id'), k); setOver(null) }}
      className={`w-72 shrink-0 rounded-xl p-3 transition-colors ${over === k ? 'bg-indigo-100/60' : 'bg-slate-100/70'}`}>
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-sub">{label}<Badge>{tasks.filter(t => t.status === k).length}</Badge></h3>
      <div className="space-y-3">{tasks.filter(t => t.status === k).map(t => <Card key={t.id} draggable onDragStart={e => e.dataTransfer.setData('id', t.id)} className="cursor-grab p-3 transition hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing">
        <div className="mb-2 flex items-center gap-2"><PriorityBadge priority={t.priority} /><Badge tone="blue">{t.label}</Badge></div>
        <p className="text-[13px] font-semibold">{t.title}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-sub"><span>Due {t.due}</span>
          <span className="flex items-center gap-2"><span className="flex items-center gap-1"><MessageSquare size={12} />{t.comments}</span><UserAvatar user={users.find(u => u.id === t.assignee)} size={22} /></span></div></Card>)}</div></section>)}</div>
    <Modal open={open} title="Create Task" onClose={() => setOpen(false)}>
      <form onSubmit={create} className="space-y-3">
        <Input id="title" name="title" label="Title" required />
        <label className="block text-[13px] font-medium">Assignee<select name="assignee" className="mt-1.5 w-full rounded-lg border border-line px-3 py-2 text-sm">{users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}</select></label>
        <label className="block text-[13px] font-medium">Priority<select name="priority" className="mt-1.5 w-full rounded-lg border border-line px-3 py-2 text-sm"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></label>
        <Input id="due" name="due" label="Due date" type="text" placeholder="Aug 30" />
        <div className="flex justify-end gap-2 pt-2"><Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button><Button>Create Task</Button></div>
      </form></Modal>
  </>
}
