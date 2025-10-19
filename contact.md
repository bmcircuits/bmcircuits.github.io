---
layout: page
title: Contact
permalink: /contact/
body_class: subpage
---

<header class="align-center">
  <h2>Contact Us</h2>
</header>

<div class="row">
  <div class="6u 12u$(small)">
    <h4>Get in touch</h4>
    <p>Phone: (+61) 499 939 728<br>
    Email: <a href="mailto:bmcircuitsdesigns@gmail.com">bmcircuitsdesigns@gmail.com</a></p>
  </div>
  <div class="6u$ 12u$(small)">
    {% if site.formspree_id and site.formspree_id != '' %}
    <form method="POST" action="https://formspree.io/f/{{ site.formspree_id }}">
      <div class="row uniform">
        <div class="6u 12u$(xsmall)">
          <input type="text" name="name" id="name" placeholder="Name" required>
        </div>
        <div class="6u$ 12u$(xsmall)">
          <input type="email" name="email" id="email" placeholder="Email" required>
        </div>
        <div class="12u$">
          <textarea name="message" id="message" placeholder="Enter your message" rows="6" required></textarea>
        </div>
        <div class="12u$">
          <ul class="actions">
            <li><input type="submit" value="Send Message" class="special"></li>
          </ul>
        </div>
      </div>
    </form>
    {% else %}
    <p>To enable the contact form, add your Formspree form ID to <code>_config.yml</code> under <code>formspree_id</code>.</p>
    {% endif %}
  </div>
</div>
