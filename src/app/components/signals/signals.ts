import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signals',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  signalsQuestionsAnswers = signal<{ question: string, answer: string }[]>([
    {
      question: 'Q1. Explain Signals, modern reactivity, and local change detection?',
      answer: 'Signals provide fine-grained reactivity in Angular, enabling local change detection where only the affected parts of the UI update instead of the entire component tree.'
    },
    {
      question: 'Q2. What is the difference between linked Signal and Computed Signal?',
      answer: 'Computed signals are read-only derived values, whereas linked signals are writable derived signals that can be manually overridden while still reacting to their source.'
    },
    {
      question: 'Q3. Why does the Resource API not trigger interceptors?',
      answer: 'The Resource API bypasses Angular’s HttpClient and uses fetch or custom loaders, so HTTP interceptors are not triggered because they are only part of the HttpClient pipeline.'
    },
    {
      question: 'Q4. Your are using httpResource to fetch data in a service. In the component, will you read the value using computed or effect, and why?',
      answer: 'In a component, we should use computed() to read httpResource values because it provides pure reactive state for the UI, whereas effect() is meant only for side effects like logging or triggering actions.'
    },
    {
      question: 'Q5. Give two examples where you would use an effect instead of a computed signal?',
      answer: 'Use effect() for side effects like logging or interacting with external systems (e.g., localStorage, API calls), whereas computed() is only for pure state derivation.'
    },
    {
      question: 'Q6. You have a computed signal but due to some business logic, you need to set its value manually. What will you do?',
      answer: 'Computed signals are read-only, so if manual updates are required, we should use a linkedSignal() or combine a writable signal with a computed signal.'
    },
    {
      question: 'Q7. Effects created in a service vs effect created inside components-how are they different?',
      answer: 'Effects in components are automatically cleaned up with the component lifecycle, whereas effects in services persist as long as the service exists and may require manual cleanup.'
    },
    {
      question: 'Q8. What is a reactive context?',
      answer: 'A reactive context is an execution scope (like inside computed or effect) where Angular tracks signal dependencies and automatically re-runs the logic when those signals change.'
    },
    {
      question: 'Q9. Give one real-world example where you would use an equality function with signals?',
      answer: 'An equality function is useful when working with objects or API responses to prevent unnecessary updates when the new value is structurally the same as the previous one.'
    },
    {
      question: 'Q10. Implement local state management using signals and a service?',
      answer: 'Local state management with signals is implemented by storing writable signals in a service, exposing readonly signals, and updating them via methods, allowing components to reactively consume state without subscriptions.'
    }
  ]);

  activeIndex = signal<number | null>(null);

  answerVisible(index: number): void {
    this.activeIndex.update(current =>
      current === index ? null : index
    );
  }

}
