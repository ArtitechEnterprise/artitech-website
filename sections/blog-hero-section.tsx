"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BaseHeroSection } from "@/components/customs/base-hero-section";

export function BlogHeroSection() {
  const featuredPosts = [
    {
      title: "The Future of Web Development",
      description:
        "Exploring upcoming trends and technologies in web development.",
    },
    {
      title: "Optimizing Website Performance",
      description:
        "Tips and tricks to speed up your website and improve user experience.",
    },
    {
      title: "Designing for Accessibility",
      description: "Creating inclusive web experiences for all users.",
    },
  ];

  return (
    <BaseHeroSection
      title="Our Blog"
      subtitle="Insights & Innovations"
      description="Stay up-to-date with the latest trends, tips, and insights in web development and digital innovation."
      primaryCTA="Read Latest"
      secondaryCTA="Subscribe"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </BaseHeroSection>
  );
}
