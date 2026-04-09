import { Routes } from '@angular/router';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { TemplateDrivenFrom } from './components/template-driven-from/template-driven-from';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { authguardGuard } from './guard/authguard-guard';
import { Home } from './components/home/home';
import { ReactiveForms} from './components/reactive-forms/reactive-forms';
import { NgrxPractise } from './components/ngrx-practise/ngrx-practise';
import { CrudNgrx } from './components/crud-ngrx/crud-ngrx';
import { StopWatch } from './components/stop-watch/stop-watch';
import { Rxjs } from './components/rxjs/rxjs';
import { QuizzApp } from './components/quizz-app/quizz-app';
import { ExpensiveTracker } from './components/expensive-tracker/expensive-tracker';
import { CreationOperator } from './components/creation-operator/creation-operator';
import { Combination } from './components/combination/combination';
import { ErrorHandling } from './components/error-handling/error-handling';
import { HigherOrderMapping } from './components/higher-order-mapping/higher-order-mapping';
import { PipelineTransformation } from './components/pipeline-transformation/pipeline-transformation';
import { TimingControls } from './components/timing-controls/timing-controls';
import { Signals } from './components/signals/signals';
import { ChatUi } from './components/chat-ui/chat-ui';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authguardGuard]
    },
    {
        path: 'life-cycle',
        component: LifeCycle
    },
    {
        path: 'template-syntax',
        component: TemplateDrivenFrom
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'reactive-form',
        component: ReactiveForms
    },
    {
        path: 'ngrx',
        component: NgrxPractise
    },
    {
        path: 'crud', component: CrudNgrx
    },
    {
        path: 'stop-watch', component: StopWatch
    },
    {
        path: 'signals', component: Signals
    },
    {
        path: 'chat-ui', component: ChatUi
    },
    {
        path: 'rxjs',
        component: Rxjs
    },
    {
        path: 'quizz',
        component: QuizzApp
    },
    {
        path: 'expensive-tracker',
        component: ExpensiveTracker
    },
    { path: 'cop', component: CreationOperator },
    { path: 'ptop', component: PipelineTransformation },
    { path: 'tcop', component: TimingControls },
    { path: 'coop', component: Combination },
    { path: 'homm', component: HigherOrderMapping },
    { path: 'ehop', component: ErrorHandling }
    
];
