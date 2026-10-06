import { useLocation } from 'react-router-dom'
import { EmptyState, PageHeader } from '../components/common/ui.jsx'
export default function Placeholder() {
  const name = useLocation().pathname.split('/').pop()
  return <><PageHeader title={name[0].toUpperCase() + name.slice(1)} /><EmptyState title="Coming in the next build step" text="This screen is routed and ready to be filled in." /></>
}
