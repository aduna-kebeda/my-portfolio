import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!form.current) return;
    emailjs
      .sendForm(
        'service_fzfslrp', // Replace with your EmailJS service ID
        'template_6p6etsh', // Replace with your EmailJS template ID
        form.current,
        'Ov7VM2I-bez5__fLb' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Thanks for reaching out! I'll get back to you soon!");
          form.current?.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again or contact me directly.');
          console.error('Failed to send email:', error);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kebedeadugna45@gmail.com',
      href: 'mailto:kebedeadugna45@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 973 309 749',
      href: 'tel:+251973309749'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a href="/resume.pdf" download>
            <Button size="lg" className="flex items-center gap-2">
              Download Resume
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you have a question about my work 
                or just want to say hello, don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background border hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href !== '#' ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="user_name"
                      type="text"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
