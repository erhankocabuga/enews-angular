import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/Objects';
import Utils from '../../general/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  categories: Section[] = Utils.getCategories();
  newsletterEmail: string = '';
  newsletterInputClass: string = '';
  newsletterFormIsCompleted: boolean = false;
  isSubmitting: boolean = false;
  
  constructor() { }

  onNewsletterKey(event: any) { 
    this.newsletterEmail = event.target.value;
    this.validateNewsletter();
    console.log("this.newsletterInputClass", this.newsletterInputClass);
  }

  validateNewsletter(): void {
    if(this.newsletterEmail) {
      let isValidated = Utils.validateEmail(this.newsletterEmail);
      console.log("isValidated", isValidated);
      if(isValidated) {
        this.newsletterInputClass = 'success'; 
      }
      else {
        this.newsletterInputClass = 'error'; 
      }
    }
    else 
      this.newsletterInputClass = 'error'; 
  };

  signUpNewsletter(): void {
    console.log("signup");
    this.validateNewsletter();

    if(this.newsletterInputClass == 'success') {
      this.isSubmitting = true;
      setTimeout(() => {
        this.newsletterFormIsCompleted = true;
      }, 1500); 
    }
  };

  ngOnInit() {
  }

}
