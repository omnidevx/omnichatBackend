import { AbstractChat } from './abstract/AbstractChat';
import { Participant } from './interfaces/IParticipant';
import { Message } from './interfaces/IMessage';

export class Groupchat extends AbstractChat {
  private title: string;
  private description: string;
  private pictureUri: string;
  private admins: Participant[];

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.pictureUri = '';
    this.admins = [];
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(_title: string): void {
    this.title = _title;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(_description: string): void {
    this.description = _description;
  }

  getPictureUri(): string {
    return this.pictureUri;
  }

  setPictureUri(_pictureUri: string): void {
    this.pictureUri = _pictureUri;
  }

  getAdmins(): Participant[] {
    return this.admins;
  }

  addAdminById(participant: Participant): void {
    this.admins.push(participant);
  }

  removeAdminById(participant: Participant): void {
    this.admins = this.admins.filter(e => e.id !== participant.id);
  }
}
