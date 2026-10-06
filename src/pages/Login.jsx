import { useNavigate } from 'react-router-dom'
import { GitBranch, KanbanSquare, Video, Sparkles } from 'lucide-react'
import { Button, Card, Input, Logo } from '../components/common/ui.jsx'
const perks = [[KanbanSquare, 'Project & Task Management'], [GitBranch, 'GitHub Integration'], [Video, 'Real-Time Chat & Video Calls'], [Sparkles, 'AI-Powered Codebase Understanding']]
export default function Login() {
  const nav = useNavigate()
  return <div className="grid min-h-screen lg:grid-cols-2">
    <section className="hidden flex-col justify-center bg-gradient-to-br from-navy to-navy-2 p-14 text-white lg:flex">
      <Logo dark />
      <h1 className="mt-10 text-5xl font-bold leading-tight">Your Team's<br />Collaboration Hub</h1>
      <p className="mt-4 max-w-md text-slate-300">Manage your projects, stay in sync, and build amazing software — all in one place.</p>
      <ul className="mt-8 space-y-3">{perks.map(([I, t]) => <li key={t} className="flex items-center gap-3 text-sm"><span className="rounded-lg bg-white/10 p-2"><I size={16} /></span>{t}</li>)}</ul>
      <p className="mt-12 text-sm text-slate-400">Build Together. Ship Better.</p>
    </section>
    <section className="flex items-center justify-center p-6"><Card className="w-full max-w-sm p-7">
      <div className="mb-5 lg:hidden"><Logo /></div>
      <h2 className="text-xl font-bold">Welcome Back</h2><p className="mb-5 mt-1 text-sm text-sub">Log in to continue to RepoGuardian</p>
      <form className="space-y-4" onSubmit={e => { e.preventDefault(); nav('/dashboard') }}>
        <Input id="email" label="Email address" type="email" defaultValue="manu@college.edu" required />
        <Input id="pw" label="Password" type="password" defaultValue="password" required />
        <div className="flex justify-between text-[13px]"><label className="flex items-center gap-2"><input type="checkbox" defaultChecked />Remember me</label><a href="#" className="font-medium text-brand">Forgot password?</a></div>
        <Button className="w-full">Login</Button>
        <div className="text-center text-xs text-faint">OR</div>
        <Button type="button" variant="secondary" className="w-full" onClick={() => nav('/dashboard')}><GitBranch size={15} />Continue with GitHub</Button>
      </form>
      <p className="mt-5 text-center text-[13px] text-sub">Don't have an account? <a href="#" className="font-semibold text-brand">Sign up</a></p>
    </Card></section></div>
}
