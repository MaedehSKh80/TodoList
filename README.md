

# ✅ Todo List — Task Manager with Local Storage (Coming Soon)

A clean, interactive task management web app built with **HTML5**, **CSS3**, **Bootstrap**, and **vanilla JavaScript**.  
This project demonstrates my ability to build a fully client-side task organizer with modular code, security awareness, and planned scalability.

🔗 **Live Demo:** [GitHub Pages Link — Coming Soon](#)

---

## 🚀 Current Features

- ✅ Create tasks with **title** and **detailed description**
- ✅ **Mark as complete** (green) / **incomplete** (red) with visual feedback
- ✅ **Edit** task title & description via prompt dialogs
- ✅ **Delete** individual tasks with confirmation dialog
- ✅ **Search** tasks by keyword — real-time filtering
- ✅ **No results** feedback message with helpful guidance
- ✅ **Clear inputs** button on the form
- ✅ Anti-XSS protection with custom `escapeHtml()` function
- ✅ Fully **responsive** (Bootstrap grid: 2 columns on desktop, stacked on mobile)
- ✅ Semantic event delegation for dynamic task buttons

---

## 🔮 Planned Improvements (Roadmap)

| Feature | Status |
|--------|--------|
| **Local Storage** persistence (tasks survive page refresh) | 🟡 Planned |
| **Task counter** (total tasks + completed tasks) | 🟡 Planned |
| **Live search** — filter as you type (no button required) | 🟡 Planned |
| **Search result counter** (e.g., "3 of 12 tasks found") | 🟡 Planned |
| **Clear search button** (reset search with one click) | 🟡 Planned |
| **Rewrite Reset button** from HTML to JavaScript for better control | 🟡 Planned |
| **Improve edit security** — replace `prompt()` with modal form & validation | 🟡 Planned |
| **Clear all tasks** button (with confirmation) | 🟡 Planned |
| Due dates, priority flags, drag & drop sorting | 🔜 Future consideration |

---

## 🧠 What I Learned & Challenges Faced

### ✅ Concepts mastered through this project:

- **DOM manipulation** with `insertAdjacentHTML`, `querySelector`, `classList`
- **Event delegation** — handling clicks on dynamically created task buttons
- **Search/filter logic** — case-insensitive search with visibility toggling
- **XSS prevention** — manually implemented `escapeHtml()` to sanitize user input
- **Bootstrap integration** — responsive layout, dark cards, utility classes
- **Modular code structure** with regions (`#region`) for readability

### ⚠️ Challenges & areas to improve:

| Challenge | How I plan to improve |
|-----------|------------------------|
| `prompt()` for editing is insecure and user-unfriendly | Replace with a modal (Bootstrap) + validation |
| No data persistence | Add Local Storage (CRUD sync) |
| Search requires a button click | Upgrade to live `input` event |
| No visual feedback on task count | Add counter badge & progress indicator |
| Reset button is pure HTML, not controlled by JS | Move fully into JS for consistent behavior |
| No "Clear All Tasks" function | Add dedicated button with confirmation |

---

## 🛠️ Technologies Used

- **HTML5** — semantic structure
- **CSS3** — custom styling + reset
- **Bootstrap 5.3** — layout, cards, buttons, forms
- **Font Awesome 6.7** — icons (check, trash, edit, pencil, search)
- **Vanilla JavaScript (ES6)** — all interactivity, no frameworks

---

## 📁 Project Structure

```
todo-list/
├── index.html
├── assets/
│   ├── Css/
│   │   └── style.css
│   └── JS/
│       └── script.js
└── README.md
```

---

## 💼 Use Cases & Practical Value

This project demonstrates skills relevant for:

- **Junior Frontend Developer** — interactive UI, DOM events, search, filtering
- **Intern / Trainee** — clean code, security awareness, roadmap planning
- **Portfolio projects** — shows ability to plan improvements, not just ship MVP
- **Freelance small tools** — task managers, note apps, client-side data dashboards

---

## 👩‍💻 Author

**Maedeh Sakhaei**  
🌐 [itsmaedehskh.ir](https://itsmaedehskh.ir)  
Built with ❤️ as part of my frontend development journey.
