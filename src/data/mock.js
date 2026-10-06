export const users = [
  { id: 'u1', name: 'Manu Garg', role: 'Team Lead', online: true, color: '#3b5bfd' },
  { id: 'u2', name: 'Rahul Sharma', role: 'Backend Developer', online: true, color: '#0f9d6b' },
  { id: 'u3', name: 'Priya Singh', role: 'Frontend Developer', online: false, color: '#c2410c' },
  { id: 'u4', name: 'Aman Verma', role: 'Designer', online: true, color: '#7c3aed' },
]
export const workspaces = [
  { id: 'smart-campus', name: 'Smart Campus Assistant', type: 'Team Project', members: 6, status: 'active' },
  { id: 'ecommerce', name: 'E-Commerce Platform', type: 'Web Application', members: 8, status: 'active' },
  { id: 'foodie', name: 'Foodie App', type: 'Mobile Application', members: 4, status: 'active' },
]
export const initialTasks = [
  { id: 't1', title: 'Design login page', priority: 'high', assignee: 'u1', due: 'Aug 25', status: 'todo', label: 'UI', comments: 3 },
  { id: 't2', title: 'User authentication', priority: 'high', assignee: 'u2', due: 'Aug 26', status: 'progress', label: 'Backend', comments: 5 },
  { id: 't3', title: 'Testing login', priority: 'medium', assignee: 'u3', due: 'Aug 28', status: 'testing', label: 'QA', comments: 1 },
  { id: 't4', title: 'Basic routing', priority: 'medium', assignee: 'u4', due: 'Aug 22', status: 'done', label: 'Frontend', comments: 0 },
]
export const activity = [
  { id: 1, who: 'u2', text: 'pushed 3 commits to backend', time: '2h ago' },
  { id: 2, who: 'u3', text: 'created a new task: UI for login page', time: '4h ago' },
  { id: 3, who: 'u1', text: 'was invited to E-Commerce Platform', time: 'Yesterday' },
]
export const meetings = [
  { id: 'm1', title: 'Team Standup', when: 'Today, 5:00 PM – 5:30 PM', action: 'Join' },
  { id: 'm2', title: 'Project Discussion', when: 'Tomorrow, 11:00 AM – 12:00 PM', action: 'View' },
]
