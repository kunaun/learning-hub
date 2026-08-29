export const gradeGroups = [
  {
    id: 'kindergarten',
    label: 'อนุบาล',
    emoji: '🧸',
    grades: [1, 2, 3].map((n) => ({ id: `k${n}`, label: `K${n}`, name: `อนุบาล ${n}` })),
  },
  {
    id: 'primary',
    label: 'ประถม',
    emoji: '🎒',
    grades: [1, 2, 3, 4, 5, 6].map((n) => ({ id: `p${n}`, label: `P${n}`, name: `ประถม ${n}` })),
  },
  {
    id: 'secondary',
    label: 'มัธยม',
    emoji: '🏫',
    grades: [1, 2, 3, 4, 5, 6].map((n) => ({ id: `m${n}`, label: `M${n}`, name: `มัธยม ${n}` })),
  },
];

export const subjects = [
  { id: 'thai', icon: '📚', name: 'ภาษาไทย', character: 'น้องอักษรา', tone: 'pink' },
  { id: 'math', icon: '🔢', name: 'คณิตศาสตร์', character: 'น้องคิดเลข', tone: 'green' },
  { id: 'science', icon: '🧪', name: 'วิทยาศาสตร์', character: 'น้องทดลอง', tone: 'blue' },
  { id: 'social', icon: '🌍', name: 'สังคม / ประวัติศาสตร์', character: 'น้องสังคม', tone: 'gold' },
  { id: 'english', icon: '🇬🇧', name: 'ภาษาอังกฤษ', character: 'น้องอิงลิช', tone: 'sky' },
  { id: 'art', icon: '🎨', name: 'ศิลปะ', character: 'น้องศิลป์', tone: 'purple' },
  { id: 'health', icon: '🏀', name: 'สุขศึกษา', character: 'น้องสุขใจ', tone: 'mint' },
  { id: 'career', icon: '👨‍🍳', name: 'การงานอาชีพ', character: 'น้องอาชีพ', tone: 'cream' },
];

export function getGrade(gradeId) {
  return gradeGroups.flatMap((group) => group.grades).find((grade) => grade.id === gradeId);
}

export function getSubject(subjectId) {
  return subjects.find((subject) => subject.id === subjectId);
}
