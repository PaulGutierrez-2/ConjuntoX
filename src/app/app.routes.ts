import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningPathComponent } from './pages/learning-path/learning-path.component';
import { SeTheoryComponent } from './pages/topics/se-theory/se-theory.component';
<<<<<<< HEAD
import { UnionComponent } from './pages/topics/union/union.component';
import { CardinalityComponent } from './pages/topics/cardinality/cardinality.component';
=======
import { CardinalityComponent } from './pages/topics/cardinality/cardinality.component';
import { UnionComponent } from './pages/topics/union/union.component';
>>>>>>> 613cf46fcaff7ca109703778d1a4bdd4a9bff8ab
import { IntersectionComponent } from './pages/topics/intersection/intersection.component';
import { DifferenceComponent } from './pages/topics/difference/difference.component';
import { ComplementComponent } from './pages/topics/complement/complement.component';
import { SymmetricDifferenceComponent } from './pages/topics/symmetric-difference/symmetric-difference.component';
<<<<<<< HEAD
=======

>>>>>>> 613cf46fcaff7ca109703778d1a4bdd4a9bff8ab
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'info', component: InfoComponent},
    {path:'learningpath', component: LearningPathComponent},
<<<<<<< HEAD
    {path:'setheory', component: SeTheoryComponent},
    {path:'cardinality', component:CardinalityComponent},
    {path:'union', component: UnionComponent},
    {path:'intersection', component: IntersectionComponent},
    {path:'difference', component: DifferenceComponent},
    {path:'complement', component: ComplementComponent},
    {path:'SymDifference', component: SymmetricDifferenceComponent},
=======
    {path:'learningpath/set-theory', component: SeTheoryComponent},
    {path:'learningpath/cardinality', component: CardinalityComponent},
    {path:'learningpath/union', component: UnionComponent},
    {path:'learningpath/intersection', component: IntersectionComponent},
    {path:'learningpath/difference', component: DifferenceComponent},
    {path:'learningpath/complement', component: ComplementComponent},
    {path:'learningpath/symmetric-difference', component: SymmetricDifferenceComponent},
>>>>>>> 613cf46fcaff7ca109703778d1a4bdd4a9bff8ab
];
