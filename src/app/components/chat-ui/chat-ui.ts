import { Component, OnInit, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-chat-ui',
  imports: [],
  templateUrl: './chat-ui.html',
  styleUrl: './chat-ui.css',
})
export class ChatUi implements OnInit {
  messages = signal<string[]>([]);

  ngOnInit() {
    // Initialization logic can go here if needed
    this.send('Welcome to the chat!');
  }

  send(message: string) {
    if(!message.trim()) return;
    this.messages.update((msgs) => [...msgs, message]);
  }

  clearMessages() {
    this.messages.set([]);
  }
}
