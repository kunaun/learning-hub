export const gradeGroups = [
  {
    id: 'kindergarten',
    label: 'อนุบาล',
    emoji: '🧸',
    grades: [
      { id: 'k1', label: 'อ.1', name: 'อนุบาล 1' },
      { id: 'k2', label: 'อ.2', name: 'อนุบาล 2' },
      { id: 'k3', label: 'อ.3', name: 'อนุบาล 3' },
    ],
  },
  {
    id: 'primary',
    label: 'ประถม',
    emoji: '🎒',
    grades: [1, 2, 3, 4, 5, 6].map((n) => ({ id: `p${n}`, label: `ป.${n}`, name: `ประถม ${n}` })),
  },
  {
    id: 'secondary',
    label: 'มัธยม',
    emoji: '🏫',
    grades: [1, 2, 3, 4, 5, 6].map((n) => ({ id: `m${n}`, label: `ม.${n}`, name: `มัธยม ${n}` })),
  },
];

export const subjects = [
  { id: 'thai', icon: '📚', name: 'ภาษาไทย', path: '/thai', character: 'นักปราชญ์', tone: 'pink' },
  { id: 'math', icon: '🔢', name: 'คณิตศาสตร์', path: null, character: 'นักคณิต', tone: 'green' },
  { id: 'science', icon: '🧪', name: 'วิทยาศาสตร์', path: '/science', character: 'นักทดลอง', tone: 'blue' },
  { id: 'social', icon: '🌍', name: 'สังคม / ประวัติศาสตร์', path: '/social', character: 'นักสำรวจ', tone: 'gold' },
  { id: 'english', icon: '🇬🇧', name: 'ภาษาอังกฤษ', path: '/english', character: 'นักเดินทาง', tone: 'sky' },
  { id: 'art', icon: '🎨', name: 'ศิลปะ', path: null, character: 'ศิลปิน', tone: 'purple' },
  { id: 'health', icon: '🏀', name: 'สุขศึกษา', path: null, character: 'นักกีฬา', tone: 'mint' },
  { id: 'career', icon: '👨‍🍳', name: 'การงาน', path: null, character: 'เชฟนักประดิษฐ์', tone: 'cream' },
];

export function getGrade(gradeId) {
  return gradeGroups.flatMap((group) => group.grades).find((grade) => grade.id === gradeId);
}

export function getSubject(subjectId) {
  return subjects.find((subject) => subject.id === subjectId);
}
