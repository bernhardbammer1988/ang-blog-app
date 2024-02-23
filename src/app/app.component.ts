import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CategoryNavbarComponent,
    HomeComponent,
    ContactUsComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    SubscriptionFormComponent,
    AboutUsComponent,
    SubscriptionFormComponent,
    SingleCategoryComponent,
    PostCardComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Something else here from app component';
}

