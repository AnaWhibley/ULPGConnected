import { ActiveUsersPipe } from './active-users.pipe';

describe('ActiveUsersPipe', () => {
  it('create an instance', () => {
    const pipe = new ActiveUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
