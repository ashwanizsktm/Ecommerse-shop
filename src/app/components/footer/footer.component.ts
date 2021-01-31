import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footerStoreItems = ["find a store", "become a member", "sign up for Email", "send us feedback"];
  footerHelpItems = ["Get Help", "Order Status", "Delivery", "Returns", "Payment options",
    "contact us on nike.com inquiries", "contact us on all other inquiries"];
  footerAboutItems = ["about nike", "news", "Careers", "Investers", "sustainablity"]

  footerSocialLinkandImg = [
    {
      link: "https://www.facebook.com/",
      img: "../../../assets/Images/facebook.png"
    },

    {
      link: "https://www.instagram.com/",
      img: "../../../assets/Images/instagram.jpg"
    },

    {
      link: "https://twitter.com/",
      img: "../../../assets/Images/twitter.svg"
    },

    {
      link: "https://www.youtube.com/",
      img: "../../../assets/Images/youtube.jpg"
    }
  ]

  footerCopyrightLinkItems = [
    'Guides', 'Terms of sale', 'Terms of use', 'Nike Privacy Policy'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
