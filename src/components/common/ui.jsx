import { X } from 'lucide-react'
const cx = (...a) => a.filter(Boolean).join(' ')
export const Card = ({ className, ...p }) => <div className={cx('bg-white border border-line rounded-xl shadow-sm', className)} {...p} />
export function Button({ variant = 'primary', className, ...p }) {
  const v = { primary: 'bg-brand text-white hover:bg-brand-dark', secondary: 'bg-white text-ink border border-line hover:bg-canvas', danger: 'bg-red-600 text-white hover:bg-red-700' }[variant]
  return <button className={cx('inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-150', v, className)} {...p} />
}
export function Input({ label, id, className, ...p }) {
  return <label htmlFor={id} className="block text-[13px] font-medium text-ink">{label}
    <input id={id} className={cx('mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder:text-faint', className)} {...p} /></label>
}
export function Badge({ tone = 'gray', children }) {
  const t = { gray: 'bg-slate-100 text-sub', green: 'bg-emerald-50 text-emerald-700', orange: 'bg-amber-50 text-amber-700', red: 'bg-red-50 text-red-600', blue: 'bg-indigo-50 text-brand' }[tone]
  return <span className={cx('inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold', t)}>{children}</span>
}
export const StatusBadge = ({ status }) => {
  const m = { active: ['green', 'Active'], completed: ['green', 'Completed'], testing: ['orange', 'Testing'], pending: ['red', 'Pending'], progress: ['blue', 'In progress'] }[status] || ['gray', status]
  return <Badge tone={m[0]}>{m[1]}</Badge>
}
export const PriorityBadge = ({ priority }) => <Badge tone={{ high: 'red', medium: 'orange', low: 'green' }[priority]}>{priority[0].toUpperCase() + priority.slice(1)}</Badge>
export function UserAvatar({ user, size = 28 }) {
  const initials = user.name.split(' ').map(n => n[0]).join('')
  return <span title={user.name} style={{ width: size, height: size, background: user.color, fontSize: size * 0.38 }} className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white ring-2 ring-white">{initials}</span>
}
export function Modal({ open, title, onClose, children }) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4" onClick={onClose}>
    <div role="dialog" aria-modal="true" aria-label={title} className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={e => e.stopPropagation()}>
      <div className="mb-4 flex items-center justify-between"><h2 className="text-base font-semibold">{title}</h2>
        <button aria-label="Close" onClick={onClose} className="rounded p-1 text-sub hover:bg-canvas"><X size={18} /></button></div>{children}</div></div>
}
export const PageHeader = ({ title, subtitle, actions }) => <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
  <div><h1 className="text-2xl font-bold tracking-tight">{title}</h1>{subtitle && <p className="mt-1 text-sm text-sub">{subtitle}</p>}</div><div className="flex gap-2">{actions}</div></div>
export const EmptyState = ({ title, text }) => <Card className="p-10 text-center"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-sub">{text}</p></Card>
export const Logo = ({ dark }) => <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-violet-500 text-white">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg></span>
  <span className={cx('text-[17px] font-bold', dark ? 'text-white' : 'text-ink')}>RepoGuardian</span></div>
