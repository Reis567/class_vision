import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name: string;

    @OneToMany(() => Video, video => video.room)
    videos: Video[];

    @ManyToMany(() => Subject, subject => subject.rooms)
    @JoinTable({
        name: 'room_subject',
        joinColumn: { name: 'room_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'subject_id', referencedColumnName: 'id' }
    })
    subjects: Subject[];
}
