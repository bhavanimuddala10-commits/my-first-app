import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InterpolationComponent } from './interpolation-component/interpolation-component';
import { PropertyBindingDemo } from './property-binding-demo/property-binding-demo';
import { EventBindingDemo } from './event-binding-demo/event-binding-demo';
import { NullSafeDemo } from './null-safe-demo/null-safe-demo';
import { TemplateRefDemo } from './template-ref-demo/template-ref-demo';
import { StructuralDirectivesDemo } from './structural-directives-demo/structural-directives-demo';
import { NgTemplateOutletDemo } from './ng-template-outlet-demo/ng-template-outlet-demo';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetail } from './product-list/product-detail';

import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { DependencyInjectionServices } from './dependency-injection-services/dependency-injection-services';
export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'PropertyBinding', component: PropertyBindingDemo },
    { path: 'EventBinding', component: EventBindingDemo },
    { path: 'NullSafe', component: NullSafeDemo },
    { path: 'TemplateRef', component: TemplateRefDemo },
    {path:'StructuralDirectives',component:StructuralDirectivesDemo},
    {path:'NgTemplateOutlet',component:NgTemplateOutletDemo},
    {path:'ProductListComponent',component:ProductListComponent},
    {path:"TwoWayBinding",component:TwoWayBinding},
    {path:"services",component:DependencyInjectionServices},
    { path: 'product/:id', component: ProductDetail },

    { path: '**', redirectTo: 'home' }
];
