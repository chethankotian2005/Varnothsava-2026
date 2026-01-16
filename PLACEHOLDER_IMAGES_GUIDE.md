# 🎨 TEMPORARY PLACEHOLDER IMAGES (Optional)

While you're gathering real images, you can use placeholder images to see how the design looks.

## 📸 Auto-Generate Placeholders

### **Option 1: Using Placeholder Services (Easiest)**

Add this to any event temporarily in `/src/data/events.ts`:

```typescript
// Temporary placeholder - replace with real image
image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
```

This will work immediately since Unsplash is already configured in `next.config.js`.

### **Option 2: Use Placeholder.com**

```typescript
image: 'https://via.placeholder.com/800x600/1a1a1a/gold?text=Classical+Dance',
```

### **Option 3: Use UI Avatars (Already configured)**

For events with text:
```typescript
image: 'https://ui-avatars.com/api/?name=Classical+Dance&size=800&background=1a1a1a&color=d4af37',
```

---

## 🔄 Quick Test with Real Images from Unsplash

Replace these temporarily in `/src/data/events.ts` for instant visual testing:

### **Cultural Events:**
```typescript
// Classical Dance
image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop',

// Singing
image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop',

// Western Dance
image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop',

// Photography
image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop',
```

### **Technical Events:**
```typescript
// Coding
image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',

// Hackathon
image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',

// Robotics
image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&h=600&fit=crop',

// Gaming
image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
```

### **Management Events:**
```typescript
// Business/Finance
image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',

// Startup Pitch
image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop',
```

---

## ⚡ Quick Implementation

1. **Copy-paste any of the URLs above** into the `image` field in `/src/data/events.ts`
2. **Save the file**
3. **Refresh the browser** - images appear instantly!
4. **Test hover effects** - see the zoom and card lift in action

---

## 🎯 Why Use Placeholders?

**Pros:**
- ✅ See design immediately
- ✅ Test hover effects
- ✅ Show to team/judges for feedback
- ✅ Identify layout issues early

**Cons:**
- ⚠️ Requires internet connection
- ⚠️ Slower than local images
- ⚠️ Not permanent solution

---

## 🔄 Replacing Placeholders with Real Images

Once you have your own images:

1. **Download and optimize** images to WebP
2. **Save** in `/public/images/events/`
3. **Replace** Unsplash URLs with local paths:
   ```typescript
   // Before (placeholder)
   image: 'https://images.unsplash.com/photo-xxx',
   
   // After (local)
   image: '/images/events/classical-dance.webp',
   ```

---

## 💡 Pro Tip

You can mix and match! Use:
- **Local images** for events where you have good photos
- **Placeholders** for events where you're still searching
- **No image** for events with generic fallback gradient (current design)

All three work seamlessly! The site gracefully handles missing images with the elegant gradient fallback.

---

**Remember: Placeholders are great for testing, but local WebP images are the final goal for best performance! 🚀**
