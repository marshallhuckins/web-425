import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Virtual Taco Stand</h1>
      <h2>The Virtual Taco Stand is located in the heart of downtown!</h2>
      <p>
        We specialize in good-ole home cooking. Our menu ranges from Tacos Al Pastor
        to our famous Birra Tacos. We also have a variety of daily specials that are
        sure to please your taste buds. We are open 24 hours a day, 7 days a week. Come
        on down and see us!
      </p>
      <p>
        Having a party? We cater! Give us a call and we will be happy to help you with
        your catering needs.
      </p>
      <div class="highlights-container">
        <div class="highlight">
          <img src="/assets/Downtown.png" alt="image of downtown" />
          <p>Discover the heart of downtown flavor at our taco stand!</p>
        </div>
        <div class="highlight">
          <img src="/assets/Stand.png" alt="image of taco stand with a vendor" />
          <p>Welcome to our vibrant taco stand, where every bite is a fiesta!</p>
        </div>
        <div class="highlight">
          <img src="/assets/Tacos.png" alt="image of three tacos" />
          <p>Feast your eyes on our trio of tacos, bursting with flavor.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .highlights-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
    }
    .highlight {
      flex: 0 1 calc(33.333% - 20px);
      text-align: center;
    }
    .highlight img {
      max-width: 100%;
      height: auto;
    }
    .highlight p {
      margin-top: 10px;
    }
  `]
})
export class HomeComponent { }
