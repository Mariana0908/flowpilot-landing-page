export const heroContent = {
  badge: 'AI-powered workspace for modern teams',
  title: 'From scattered ideas to aligned execution.',
  description:
    'FlowPilot helps teams capture ideas, organize tasks, and connect decisions to action in one AI-powered workspace.',
  primaryAction: 'Request early access',
  secondaryAction: 'See how it works',
}

export type Feature = {
  id: string
  title: string
  description: string
}

export type Benefit = {
  id: string
  title: string
  description: string
}

export type Stat = {
  id: string
  value: string
  label: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
}

export const features: Feature[] = [
  {
    id: 'ai-meeting-capture',
    title: 'AI meeting capture',
    description:
      'Turn conversations into structured notes, action items, and follow-ups automatically.',
  },
  {
    id: 'decision-tracking',
    title: 'Decision tracking',
    description:
      'Keep every key decision documented with context, owner, and next steps.',
  },
  {
    id: 'contextual-task-planning',
    title: 'Contextual task planning',
    description:
      'Create tasks directly from ideas, notes, and discussions without losing the bigger picture.',
  },
  {
    id: 'shared-team-alignment',
    title: 'Shared team alignment',
    description:
      'Bring priorities, blockers, and momentum into one shared view for the whole team.',
  },
]

export const benefits: Benefit[] = [
  {
    id: 'reduce-context-switching',
    title: 'Reduce context switching',
    description:
      'Stop jumping between docs, chats, and task boards. FlowPilot keeps work connected in one place.',
  },
  {
    id: 'move-faster-with-clarity',
    title: 'Move faster with clarity',
    description:
      'Make decisions visible, assign ownership quickly, and keep everyone aligned on what happens next.',
  },
  {
    id: 'turn-discussion-into-execution',
    title: 'Turn discussion into execution',
    description:
      'Capture ideas while they are fresh and convert them into structured action without extra manual work.',
  },
]

export const stats: Stat[] = [
  {
    id: 'faster-decision-follow-through',
    value: '40%',
    label: 'faster decision follow-through',
  },
  {
    id: 'clearer-task-visibility',
    value: '3x',
    label: 'clearer task visibility across teams',
  },
  {
    id: 'hours-saved-per-week',
    value: '12h',
    label: 'saved per team every week',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'elena-torres',
    quote:
      'FlowPilot gave our team one place to think, decide, and move. We reduced follow-up chaos almost immediately.',
    name: 'Elena Torres',
    role: 'Product Lead at NovaLabs',
  },
  {
    id: 'marcus-reed',
    quote:
      'The biggest win was clarity. Meetings stopped being dead ends because tasks and decisions stayed connected.',
    name: 'Marcus Reed',
    role: 'Operations Manager at Northstar',
  },
]

export const trustedLogos = ['NovaLabs', 'Kinetic', 'Northstar', 'Horizon', 'AtomHQ']