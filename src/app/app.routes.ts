import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningPathComponent } from './pages/learning-path/learning-path.component';
import { SeTheoryComponent } from './pages/topics/se-theory/se-theory.component';
import { UnionComponent } from './pages/topics/union/union.component';
import { CardinalityComponent } from './pages/topics/cardinality/cardinality.component';
import { IntersectionComponent } from './pages/topics/intersection/intersection.component';
import { DifferenceComponent } from './pages/topics/difference/difference.component';
import { ComplementComponent } from './pages/topics/complement/complement.component';
import { SymmetricDifferenceComponent } from './pages/topics/symmetric-difference/symmetric-difference.component';
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'info', component: InfoComponent},
    {path:'learningpath', component: LearningPathComponent},
    {path:'setheory', component: SeTheoryComponent},
    {path:'cardinality', component:CardinalityComponent},
    {path:'union', component: UnionComponent},
    {path:'intersection', component: IntersectionComponent},
    {path:'difference', component: DifferenceComponent},
    {path:'complement', component: ComplementComponent},
    {path:'SymDifference', component: SymmetricDifferenceComponent},
];
