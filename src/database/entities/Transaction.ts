import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from './User';

@Entity('transactions')
class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  amount: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Transaction };
