# Event Images Directory

This directory contains optimized images for all Varnothsava 2026 events.

## 📋 Image Requirements

### **File Specifications:**
- **Format:** WebP (with JPG fallback)
- **Dimensions:** 800x600px (4:3 aspect ratio)
- **File Size:** Under 100KB per image
- **Quality:** High quality, vibrant, and clear

### **Optimization Tools:**
- [TinyPNG.com](https://tinypng.com) - Easy online compression
- [Squoosh.app](https://squoosh.app) - Advanced optimization with WebP conversion
- ImageOptim (Mac) - Batch optimization tool

## 🎯 Required Images

### **Cultural Events (19 images needed):**
- `classical-dance.webp` - Traditional Indian classical dance
- `solo-singing.webp` - Solo vocal performance
- `western-dance.webp` - Contemporary/hip-hop group dance
- `face-painting.webp` - Creative face art
- `mehandi.webp` - Intricate mehandi designs
- `videography.webp` - Video camera/filmmaking
- `photography.webp` - DSLR camera/photography
- `standup-comedy.webp` - Comedian performing on stage
- `folk-music.webp` - Traditional folk singing/instruments
- `anime-quiz.webp` - Anime characters/quiz setting
- `antakshari.webp` - Musical game/group singing
- `flower-arrangement.webp` - Beautiful floral arrangements
- `variety-act.webp` - Magic/mimicry/talent show
- `rangoli.webp` - Colorful rangoli floor art
- `jam.webp` - Public speaking/impromptu speech
- `drawing.webp` - Drawing/painting art
- `sketch.webp` - Pencil sketch artwork
- `mime.webp` - Mime artist performing

### **Technical Events (10 images needed):**
- `coding.webp` - Programming/algorithms on screen
- `hackathon.webp` - Team coding/laptops
- `ai-product.webp` - AI/artificial intelligence concept
- `valorant.webp` - Valorant gaming screenshot
- `line-follower.webp` - Line follower robot on track
- `robo-soccer.webp` - Robot playing football
- `rc-aircraft.webp` - RC plane flying
- `circuit-debugging.webp` - Electronic circuits/debugging
- `maze-solver.webp` - Robot navigating maze
- `startup-pitch.webp` - Startup presentation/pitch

### **Management Events (3 images needed):**
- `finance.webp` - Financial charts/analysis
- `business-plan.webp` - Business planning/strategy
- `business-strategy.webp` - Team business simulation

## 📝 Image Guidelines

### **Content Selection:**
1. Choose images that **instantly convey** what the event is about
2. Prefer **action shots** over static images
3. Use **vibrant, colorful** images that catch attention
4. Ensure images are **culturally appropriate** for Indian college fest
5. Avoid images with visible text/watermarks

### **Technical Quality:**
- High resolution source (at least 1200px width before resizing)
- Good lighting and clear subject focus
- Professional or semi-professional quality
- No blurry or pixelated images

### **Optimization Process:**
1. **Find/Download** high-quality image (free stock photos recommended)
2. **Resize** to exactly 800x600px using any image editor
3. **Convert** to WebP format using Squoosh.app
4. **Compress** to under 100KB (adjust quality slider in Squoosh)
5. **Save** with exact filename from list above
6. **Optional:** Add subtle gradient overlay in image editor for better text readability

## 🔍 Free Stock Photo Resources

- [Unsplash.com](https://unsplash.com) - High-quality free photos
- [Pexels.com](https://pexels.com) - Free stock photos and videos
- [Pixabay.com](https://pixabay.com) - Free images and videos
- [Freepik.com](https://freepik.com) - Vectors and photos (check license)

## ✅ Checklist

After adding images, verify:
- [ ] All 32 images present in this directory
- [ ] All images are 800x600px (4:3 ratio)
- [ ] All images are under 100KB
- [ ] All images are in WebP format
- [ ] Image filenames match exactly (case-sensitive)
- [ ] Images are vibrant and professional-looking
- [ ] No watermarks or text overlays
- [ ] Proper alt text in events.ts (already done)

## 🎨 Optional: Gradient Overlay

To improve text readability on images, you can add a subtle dark gradient overlay:
- Use a linear gradient from transparent (top) to dark (bottom)
- Opacity: 40-60% at the bottom
- This helps the category badge and title stand out

## 🚀 Testing

After adding images:
1. Run `npm run dev`
2. Navigate to `/events` page
3. Verify all event cards display images correctly
4. Test hover effects (image should zoom to 110%)
5. Check page load speed (should be fast with WebP)
6. Verify images look good on mobile devices

## 📊 Expected Impact

**Before:** Plain text cards
**After:** Professional, magazine-style event cards with stunning visuals

This improvement will make the events page **significantly more appealing** and help participants quickly understand what each event is about at a glance.

---

**Priority: HIGH** - Complete this to dramatically improve the visual appeal of the events page.
