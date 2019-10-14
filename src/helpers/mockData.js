import { randomId } from './utils';

const getCard = content => ({
  id: randomId(),
  content
});
export default [
  { id: randomId(),
    name: 'To do',
    cards: [
      getCard('Ingregrate frontend with backend'),
      getCard('Create integration tests'),
      getCard('Setup production environment'),
      getCard('Deploy to production')
    ] },
  { id: randomId(),
    name: 'In progress',
    cards: [
      getCard('Create unit tests'),
      getCard('Implement API services'),
      getCard('Mock frontend')
    ] },
  {
    id: randomId(),
    name: 'Ready for test',
    cards: [
      getCard('Implement use cases'),
      getCard('Design API'),
    ]
  },
  { id: randomId(),
    name: 'Done',
    cards: [
      getCard('Design database model'),
      getCard('Create models'),
    ] },
];
