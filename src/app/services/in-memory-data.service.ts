import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: '孙武' },
      { id: 12, name: '吴起' },
      { id: 13, name: '李靖' },
      { id: 14, name: '孙膑' },
      { id: 15, name: '韩信' },
      { id: 16, name: '李世民' },
      { id: 17, name: '岳飞' },
      { id: 18, name: '曹操' },
      { id: 19, name: '陈庆之' },
      { id: 20, name: '项羽' }
    ];
    return {heroes};
  }
}