# 🎨 Marine Dreamer - Content Customization Guide

This guide explains how to add, edit, or remove **courses**, **books**, and **posters** on your website.

All content is managed from a single file:
```
src/data/siteData.ts
```

---

## 📚 Adding a New Course

Open `src/data/siteData.ts` and find the `courses` array. Add a new object:

```typescript
export const courses: Course[] = [
  // ... existing courses ...
  {
    title: "নতুন কোর্সের নাম",
    subtitle: "কোর্সের সংক্ষিপ্ত বিবরণ",
    price: "৩,০০০ টাকা",
    highlights: [
      { label: "সফল শিক্ষার্থী", value: "২০+" },
      { label: "অভিজ্ঞতা", value: "৬ মাস" },
    ],
    features: [
      "ফিচার ১",
      "ফিচার ২",
      "ফিচার ৩",
    ],
  },
];
```

---

## 📖 Adding a New Book

Find the `books` array and add:

```typescript
export const books: Book[] = [
  // ... existing books ...
  {
    title: "নতুন বইয়ের নাম",
    description: "বইয়ের সংক্ষিপ্ত বিবরণ",
    targetAudience: "কাদের জন্য এই বই",
    features: [
      "অধ্যায় বা ফিচার ১",
      "অধ্যায় বা ফিচার ২",
      "অধ্যায় বা ফিচার ৩",
    ],
  },
];
```

---

## 🖼️ Adding a Poster

Posters are **optional**. When the `posters` array is empty, the section is hidden.

### Step 1: Add your poster image
Put your poster image in `src/assets/` folder. Example: `src/assets/poster-batch-2026.jpg`

### Step 2: Import and add to the array

```typescript
// At the top of siteData.ts, add:
import posterBatch2026 from "@/assets/poster-batch-2026.jpg";

// Then update the posters array:
export const posters: Poster[] = [
  {
    title: "Batch 2026 ভর্তি চলছে",
    image: posterBatch2026,
    link: "https://wa.me/8801907483862", // Optional: clicking opens this link
  },
  // Add more posters as needed...
];
```

### Poster Properties:
| Property | Required | Description |
|----------|----------|-------------|
| `title` | ✅ Yes | Poster title shown below image |
| `image` | ✅ Yes | Imported image from assets |
| `link` | ❌ No | Optional URL (WhatsApp, Drive, etc.) |

---

## 🗑️ Removing Content

Simply delete or comment out the item from the respective array.

```typescript
// Comment out to temporarily hide:
// {
//   title: "Old Course",
//   ...
// },
```

---

## ✅ Quick Checklist

- [ ] Images go in `src/assets/`
- [ ] Import images at the top of `siteData.ts`
- [ ] Use Bengali text for titles and descriptions
- [ ] Test locally after changes
- [ ] Commit and deploy

---

## 💡 Tips

1. **Image Format**: Use `.jpg` or `.webp` for posters (smaller file size)
2. **Aspect Ratio**: Poster images work best at 4:5 ratio
3. **WhatsApp Links**: Format is `https://wa.me/880XXXXXXXXXX`
4. **Empty Array**: Set `posters: []` to hide the poster section entirely

---

## 🆘 Need Help?

Contact: [WhatsApp](https://wa.me/8801907483862)
