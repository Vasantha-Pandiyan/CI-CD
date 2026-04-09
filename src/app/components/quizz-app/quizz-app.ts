import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quizz-app',
  imports: [CommonModule],
  templateUrl: './quizz-app.html',
  styleUrl: './quizz-app.css',
})
export class QuizzApp {
  
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
      answer: 'Harper Lee'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'O2', 'CO2', 'NaCl'],
      answer: 'H2O'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
      answer: 'Leonardo da Vinci'
    }
  ];

  currentQuestionIndex = signal<number>(0);
  score = signal<number>(0);
  finished = signal<boolean>(false);
  percentage = signal<number>(0);
  feedback = signal<string>('');

  currentQuestion = () => this.questions[this.currentQuestionIndex()];
  
  selectOption(option: string) {
    if (option === this.currentQuestion().answer) {
      this.score.update(score => score + 1);
    }
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update(index => index + 1);
    } else {
      this.finished.set(true);
      this.getPercentage();
    }
  }

  resetQuiz() {
    this.currentQuestionIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
    this.feedback.set('');
  }

  getPercentage() {
    this.percentage.set((this.score() / this.questions.length) * 100);
    if (this.percentage() >= 80) {
      this.feedback.set('Excellent! You scored above 80%.');
    } else if (this.percentage() >= 50) {
      this.feedback.set('Good job! You scored above 50%.');
    } else {
      this.feedback.set('Better luck next time! Keep practicing.');
    }
  }
}
