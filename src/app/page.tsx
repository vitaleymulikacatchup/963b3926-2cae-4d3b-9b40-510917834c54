"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Award, Heart, Wine } from "lucide-react";

export default function RestaurantPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="floatingGradient"
      cardStyle="spotlight"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Smakoluk"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "reservations" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Smakoluk"
          description="Experience culinary excellence in a warm, inviting atmosphere. Discover authentic flavors crafted with passion and the finest ingredients."
          tag="Fine Dining"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765472507018-5e6te25i.jpg"
          imageAlt="Elegant restaurant dining room"
          frameStyle="card"
          buttons={[
            { text: "Make a Reservation", href: "reservations" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Featured Dishes"
          description="Explore our signature menu items, each carefully prepared by our award-winning chefs using premium local and international ingredients."
          tag="Menu Highlights"
          products={[
            {
              id: "1",
              brand: "Smakoluk",
              name: "Pan-Seared Duck Breast",
              price: "$28",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765463655717-00qgi7v7.jpg",
              imageAlt: "Pan-seared duck breast with seasonal vegetables"
            },
            {
              id: "2",
              brand: "Smakoluk",
              name: "Grilled Lamb Chops",
              price: "$32",
              rating: 5,
              reviewCount: "142",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765472507886-nboymv3b.jpg",
              imageAlt: "Perfectly grilled lamb chops with herbs"
            },
            {
              id: "3",
              brand: "Smakoluk",
              name: "Signature Chocolate Soufflé",
              price: "$14",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765472508731-f3kmqkn1.jpg",
              imageAlt: "Decadent chocolate soufflé with berry compote"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="About Smakoluk"
          description="Founded in 2010, Smakoluk has become a destination for food lovers seeking authentic culinary experiences. Our commitment to quality, innovation, and exceptional service defines everything we do."
          tag="Our Story"
          features={[
            {
              id: "1",
              title: "Award-Winning Chefs",
              description: "Our culinary team brings decades of experience and international training to create unforgettable dishes.",
              label: "3 Michelin Stars"
            },
            {
              id: "2",
              title: "Fresh Ingredients",
              description: "We source the finest local and international ingredients daily to ensure peak freshness and flavor.",
              label: "Farm-to-Table"
            }
          ]}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Discover why food lovers from around the world choose Smakoluk for their most memorable dining experiences."
          tag="Guest Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "An absolutely magical evening. Every dish was a work of art. The service was impeccable and the atmosphere was perfect for our anniversary celebration.",
              icon: Star
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@chefjaames",
              testimonial: "As a chef myself, I was impressed by the technique and creativity. The flavor combinations were unexpected and delightful. Truly exceptional dining.",
              icon: Award
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              handle: "@mariatravel",
              testimonial: "Worth every penny. This is the kind of restaurant you travel for. The tasting menu was the highlight of our vacation.",
              icon: Heart
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@davidthompson",
              testimonial: "The wine pairing selection was incredible. The sommelier clearly knows their craft. Can't wait to return for another unforgettable experience.",
              icon: Wine
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="reservations" data-section="reservations">
        <ContactText
          text="Ready to experience culinary excellence? Reserve your table at Smakoluk and create unforgettable memories with us."
          animationType="reveal-blur"
          buttons={[
            { text: "Book Now", href: "#" },
            { text: "Call Us", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <FooterBaseReveal
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Tuesday - Thursday: 5pm - 11pm" },
                { label: "Friday - Saturday: 5pm - 12am" },
                { label: "Sunday: 5pm - 10pm" },
                { label: "Monday: Closed" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567" },
                { label: "Email: reserve@smakoluk.com" },
                { label: "Address: 123 Culinary Lane, Downtown" }
              ]
            },
            {
              title: "Follow",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
          copyrightText="© 2024 Smakoluk Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}