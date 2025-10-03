import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', () => {
    const users = service.findAll();
    expect(users).toHaveLength(2);
    expect(users[0].name).toBe('Alice');
  });

  it('should find user by id', () => {
    const user = service.findById(1);
    expect(user).toBeDefined();
    expect(user?.name).toBe('Alice');
  });

  it('should return undefined for non-existent id', () => {
    const user = service.findById(999);
    expect(user).toBeUndefined();
  });


});
