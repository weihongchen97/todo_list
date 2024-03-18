(()=>{
    "use strict";
    var t = {
        d: (e,n)=>{
            for (var o in n)
                t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: n[o]
                })
        }
        ,
        o: (t,e)=>Object.prototype.hasOwnProperty.call(t, e)
    };
    t.d({}, {
        a: ()=>p
    });
    class e {
        constructor() {
            this.title,
            this.description,
            this.dueDate,
            this.priority,
            this.notes,
            this.checkList = []
        }
        addChecklistItem(t, e) {
            const n = {};
            n.value = t,
            n.state = e || !1,
            this.checkList.push(n)
        }
        removeChecklistItem(t) {
            this.checkList.splice(this.checkList.indexOf(t), 1)
        }
    }
    class n {
        constructor() {
            this._defaultStatus = !1,
            this.title,
            this.todoList = []
        }
        isDefault() {
            return this._defaultStatus
        }
        setDefaultStatus(t) {
            this._defaultStatus = t
        }
        addTodo(t) {
            this.todoList.push(t)
        }
        removeTodo(t) {
            this.todoList.splice(this.todoList.indexOf(t), 1)
        }
    }
    class o {
        projectsList = [];
        addProject(t) {
            this.projectsList.push(t)
        }
        removeProject(t) {
            this.projectsList.splice(this.projectsList.indexOf(t), 1)
        }
    }
    const s = {
        events: {},
        subscribe: function(t, e) {
            this.events[t] = this.events[t] || [],
            this.events[t].push(e)
        },
        publish: function(t, e) {
            this.events[t] && this.events[t].forEach((t=>{
                t(e)
            }
            ))
        }
    };
    class i {
        projectModal() {
            const t = document.querySelector("form");
            t.textContent = "";
            const e = document.createElement("label");
            e.textContent = "Title:";
            const n = document.createElement("input");
            n.setAttribute("name", "title"),
            n.setAttribute("id", "title"),
            n.setAttribute("type", "text");
            const o = document.createElement("label");
            o.textContent = "Set as default";
            const s = document.createElement("input");
            s.setAttribute("name", "isdefault"),
            s.setAttribute("id", "isdefault"),
            s.setAttribute("type", "checkbox");
            const i = document.createElement("button");
            i.textContent = "Done",
            i.setAttribute("id", "done-button");
            const c = document.createElement("button");
            c.textContent = "Cancel",
            c.setAttribute("id", "close-dialog"),
            c.setAttribute("formmethod", "dialog"),
            c.setAttribute("type", "button");
            const d = document.createElement("span");
            return d.setAttribute("id", "error-span"),
            t.append(e, n, o, s, i, c, d)
        }
        todoPropertiesToInject = [new c, new d, new r, new l, new a, new u];
        todoModal(t) {
            const e = document.querySelector("form");
            e.textContent = "";
            for (let n of t) {
                const t = document.createElement("label");
                t.textContent = n.name,
                t.setAttribute("for", n.nameAsHTMLAttribute),
                e.append(t, n.createInputElementsForForm())
            }
            const n = document.createElement("button");
            n.textContent = "Done",
            n.setAttribute("id", "done-button"),
            n.setAttribute("type", "submit");
            const o = document.createElement("button");
            o.textContent = "Cancel",
            o.setAttribute("id", "close-dialog"),
            o.setAttribute("formmethod", "dialog"),
            o.setAttribute("type", "button");
            const s = document.createElement("span");
            s.setAttribute("id", "error-span"),
            e.append(n, o, s)
        }
    }
    class c {
        constructor() {
            this.name = "Title",
            this.nameAsHTMLAttribute = "title"
        }
        createInputElementsForForm() {
            const t = document.createElement("input");
            return t.setAttribute("type", "text"),
            t.setAttribute("id", this.nameAsHTMLAttribute),
            t.setAttribute("name", this.nameAsHTMLAttribute),
            t
        }
        displayDetailsFromTodoAsEditable(t) {
            const e = document.createElement("input");
            return e.setAttribute("type", "text"),
            e.setAttribute("id", "title-input"),
            e.value = t.title,
            e
        }
    }
    class d {
        constructor() {
            this.name = "Description",
            this.nameAsHTMLAttribute = "description"
        }
        createInputElementsForForm() {
            const t = document.createElement("textarea");
            return t.setAttribute("id", this.nameAsHTMLAttribute),
            t.setAttribute("name", this.nameAsHTMLAttribute),
            t
        }
        displayElementsWithContentForTodoScreen(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = document.createElement("p");
            return o.textContent = t.description,
            e.appendChild(o),
            e
        }
        displayDetailsFromTodoAsEditable(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = this.createInputElementsForForm();
            return e.appendChild(o),
            o.textContent = t.description,
            e
        }
    }
    class r {
        constructor() {
            this.name = "Due Date",
            this.nameAsHTMLAttribute = "due-date"
        }
        createInputElementsForForm() {
            const t = document.createElement("input");
            return t.setAttribute("type", "date"),
            t.setAttribute("id", this.nameAsHTMLAttribute),
            t.setAttribute("name", this.nameAsHTMLAttribute),
            t
        }
        displayElementsWithContentForTodoScreen(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = document.createElement("p");
            return o.textContent = t.dueDate,
            e.appendChild(o),
            e
        }
        displayDetailsFromTodoAsEditable(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = this.createInputElementsForForm();
            return e.appendChild(o),
            o.value = t.dueDate,
            e
        }
    }
    class l {
        constructor() {
            this.name = "Priority",
            this.nameAsHTMLAttribute = "priority"
        }
        createInputElementsForForm() {
            const t = function() {
                const t = document.createElement("select")
                  , e = ["High", "Medium", "Normal"]
                  , n = document.createElement("option");
                n.textContent = "Select an option",
                n.setAttribute("value", ""),
                n.setAttribute("selected", ""),
                t.appendChild(n);
                for (let n of e) {
                    const e = document.createElement("option");
                    e.textContent = n,
                    e.setAttribute("value", n[0].toLowerCase() + n.slice(1)),
                    t.appendChild(e)
                }
                return t
            }();
            return t.setAttribute("id", this.nameAsHTMLAttribute),
            t.setAttribute("name", this.nameAsHTMLAttribute),
            t
        }
        displayElementsWithContentForTodoScreen(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = document.createElement("p");
            return o.textContent = t.priority,
            e.appendChild(o),
            e
        }
        displayDetailsFromTodoAsEditable(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = this.createInputElementsForForm();
            return e.appendChild(o),
            o.value = t.priority,
            e
        }
    }
    class a {
        constructor() {
            this.name = "Notes",
            this.nameAsHTMLAttribute = "notes"
        }
        createInputElementsForForm() {
            const t = document.createElement("textarea");
            return t.setAttribute("id", this.nameAsHTMLAttribute),
            t.setAttribute("name", this.nameAsHTMLAttribute),
            t
        }
        displayElementsWithContentForTodoScreen(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = document.createElement("p");
            return o.textContent = t.notes,
            e.appendChild(o),
            e
        }
        displayDetailsFromTodoAsEditable(t) {
            const e = document.createElement("fieldset")
              , n = document.createElement("legend");
            n.textContent = this.name,
            e.appendChild(n);
            const o = this.createInputElementsForForm();
            return e.appendChild(o),
            o.textContent = t.notes,
            e
        }
    }
    class u {
        constructor() {
            this.name = "Checklist",
            this.nameAsHTMLAttribute = "checklist-input"
        }
        createInputElementsForForm() {
            const t = document.createElement("div");
            t.setAttribute("id", "checklist-div");
            const e = document.createElement("input");
            e.setAttribute("type", "text"),
            e.setAttribute("id", this.nameAsHTMLAttribute);
            const n = document.createElement("button");
            return n.textContent = "Add",
            n.setAttribute("type", "button"),
            n.setAttribute("id", "checklist-add-button"),
            t.append(e, n),
            t
        }
        displayElementsWithContentForTodoScreen(t, e) {
            const n = document.createElement("fieldset");
            n.setAttribute("id", "checklist-fieldset");
            const o = document.createElement("legend");
            o.textContent = this.name,
            n.appendChild(o);
            const i = document.createElement("div")
              , c = document.createElement("input");
            c.setAttribute("id", "checklist-input-todo");
            const d = document.createElement("button");
            d.textContent = "Add",
            d.setAttribute("id", "checklist-add-button-todo"),
            i.append(c, d),
            n.appendChild(i);
            const r = document.createElement("ul");
            for (let n of t.checkList) {
                const o = document.createElement("li");
                r.appendChild(o);
                const i = document.createElement("input");
                i.setAttribute("type", "checkbox"),
                !0 === n.state ? i.checked = !0 : i.checked = !1,
                i.addEventListener("change", (t=>{
                    !0 === n.state ? n.state = !1 : n.state = !0,
                    s.publish("localStorageUpdated")
                }
                ));
                const c = document.createElement("label");
                c.textContent = n.value;
                const d = document.createElement("button");
                d.textContent = "x",
                d.addEventListener("click", (o=>{
                    s.publish("checklistItemDeleted", {
                        checklistItem: n,
                        todoItem: t,
                        projectItem: e
                    })
                }
                )),
                o.append(i, c, d)
            }
            return n.appendChild(r),
            n
        }
    }
    s.subscribe("todoItemDeleted", (function({todoItem: t, projectItem: e}) {
        e.removeTodo(t),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("todoItemAdded", (function({todoItem: t, projectItem: n}) {
        let o = new e;
        for (let e in t)
            "_state" !== e && ("due-date" === e ? o.dueDate = t[e] : o[e] = t[e]);
        n.addTodo(o),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("projectItemDeleted", (function(t) {
        p.removeProject(t),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("projectItemAdded", (function(t) {
        let e = new n;
        for (let n in t)
            if ("_defaultStatus" !== n)
                if ("isdefault" === n)
                    if ("on" === t.isdefault) {
                        e.setDefaultStatus(!0);
                        for (let t of p.projectsList)
                            if (t.isDefault()) {
                                t.setDefaultStatus(!1);
                                break
                            }
                        console.log(t.title, "project is now the default")
                    } else
                        e.setDefaultStatus(!1);
                else
                    e[n] = t[n];
        t.isDefault && (t.isDefault() ? e.setDefaultStatus(!0) : e.setDefaultStatus(!1)),
        p.addProject(e),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("todoItemAdded", b),
    s.subscribe("todoItemDeleted", b),
    s.subscribe("projectItemDeleted", f),
    s.subscribe("projectItemAdded", f),
    s.subscribe("checklistItemDeleted", (function({checklistItem: t, todoItem: e}) {
        e.removeChecklistItem(t),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("checklistItemDeleted", h),
    s.subscribe("checklistItemAdded", (function({checklistItem: t, todoItem: e}) {
        e.addChecklistItem(t),
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("checklistItemAdded", h),
    s.subscribe("updateProjectDefaultStatus", (function(t) {
        t.setDefaultStatus(!0);
        for (let e of p.projectsList)
            if (t !== e && e.isDefault()) {
                e.setDefaultStatus(!1);
                break
            }
        s.publish("localStorageUpdated")
    }
    )),
    s.subscribe("localStorageUpdated", (function() {
        !function(t) {
            let e;
            try {
                e = window.localStorage;
                const t = "__storage_test__";
                return e.setItem(t, t),
                e.removeItem(t),
                !0
            } catch (t) {
                return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && e && 0 !== e.length
            }
        }() ? alert("Too bad, no localStorage for us") : (console.log(p),
        localStorage.setItem("allProjects", JSON.stringify(p)),
        console.log("Local Storage Updated!"))
    }
    ));
    const m = new class {
        #t = new i;
        constructor() {
            this.pageTitle = document.querySelector("h2"),
            this.navButton = document.querySelector("nav"),
            this.actionButtons = document.querySelector("#action-buttons"),
            this.itemsList = document.querySelector("#items-list"),
            this.dialog = document.querySelector("dialog"),
            this.form = document.querySelector("form")
        }
        displayTodosScreen(t) {
            this.pageTitle.textContent = "",
            this.navButton.textContent = "",
            this.actionButtons.textContent = "",
            this.itemsList.textContent = "",
            this.form.textContent = "",
            this.#t.todoModal(this.#t.todoPropertiesToInject),
            this.pageTitle.textContent = t.title,
            this.navButton.textContent = "< Back to Projects",
            this.navButton.addEventListener("click", (t=>{
                this.displayProjectsScreen(p)
            }
            ));
            const e = document.createElement("button");
            e.textContent = "New Todo",
            this.actionButtons.appendChild(e),
            e.addEventListener("click", (t=>{
                this.dialog.showModal()
            }
            ));
            const n = document.createElement("div")
              , o = document.createElement("label");
            o.textContent = "Set as default",
            o.setAttribute("for", "set-as-default-input");
            const i = document.createElement("input");
            if (i.setAttribute("type", "checkbox"),
            i.setAttribute("id", "set-as-default-input"),
            t.isDefault() && (i.checked = !0,
            i.disabled = !0),
            i.addEventListener("change", (e=>{
                "on" === i.value && (s.publish("updateProjectDefaultStatus", t),
                i.disabled = !0)
            }
            )),
            n.append(o, i),
            this.actionButtons.appendChild(n),
            0 === t.todoList.length)
                this.itemsList.textContent = "There are no todos here...";
            else
                for (let e of t.todoList) {
                    const n = document.createElement("li")
                      , o = document.createElement("span");
                    o.textContent = e.title,
                    o.addEventListener("click", (n=>{
                        this.displaySingleTodoScreen(e, t)
                    }
                    )),
                    n.appendChild(o);
                    const i = document.createElement("button");
                    i.textContent = "delete",
                    i.addEventListener("click", (n=>{
                        s.publish("todoItemDeleted", {
                            todoItem: e,
                            projectItem: t
                        })
                    }
                    )),
                    n.appendChild(i),
                    this.itemsList.appendChild(n)
                }
            const c = document.querySelector("#checklist-div")
              , d = document.querySelector("#checklist-input")
              , r = document.querySelector("#checklist-add-button");
            r.disabled = !0,
            d.addEventListener("input", (t=>{
                d.value.length > 0 ? r.disabled = !1 : r.disabled = !0
            }
            ));
            const l = document.createElement("ul");
            c.appendChild(l);
            const a = [];
            r.addEventListener("click", (t=>{
                const e = {};
                e.value = d.value,
                a.push(e);
                const n = document.createElement("li");
                n.textContent = d.value,
                l.appendChild(n),
                d.value = "",
                d.focus()
            }
            )),
            document.querySelector("#todo-project-modal #done-button").addEventListener("click", (e=>{
                e.preventDefault();
                const n = new FormData(this.form)
                  , o = Object.fromEntries(n.entries());
                0 !== o.title.trim().length ? (o.checkList = a,
                s.publish("todoItemAdded", {
                    todoItem: o,
                    projectItem: t
                }),
                this.form.reset(),
                this.dialog.close()) : document.querySelector("#error-span").textContent = "Please enter add a title"
            }
            )),
            document.querySelector("#todo-project-modal #close-dialog").addEventListener("click", (()=>{
                this.dialog.close()
            }
            ))
        }
        displayProjectsScreen(t) {
            this.pageTitle.textContent = "",
            this.navButton.textContent = "",
            this.actionButtons.textContent = "",
            this.itemsList.textContent = "",
            this.form.textContent = "",
            this.#t.projectModal(),
            this.pageTitle.textContent = "All Projects";
            const e = document.createElement("button");
            if (e.textContent = "New Project",
            this.actionButtons.appendChild(e),
            e.addEventListener("click", (t=>{
                this.dialog.showModal()
            }
            )),
            0 === t.projectsList.length)
                this.itemsList.textContent = "There are no projects...";
            else
                for (let e of t.projectsList) {
                    const t = document.createElement("li")
                      , n = document.createElement("span");
                    n.textContent = e.title,
                    n.addEventListener("click", (t=>{
                        this.displayTodosScreen(e)
                    }
                    )),
                    t.appendChild(n);
                    const o = document.createElement("button");
                    o.textContent = "delete",
                    o.addEventListener("click", (t=>{
                        s.publish("projectItemDeleted", e)
                    }
                    )),
                    t.appendChild(o),
                    this.itemsList.appendChild(t)
                }
            document.querySelector("#todo-project-modal #done-button").addEventListener("click", (t=>{
                t.preventDefault();
                const e = new FormData(this.form)
                  , n = Object.fromEntries(e.entries());
                0 !== n.title.trim().length ? (s.publish("projectItemAdded", n),
                this.form.reset(),
                this.dialog.close()) : document.querySelector("#error-span").textContent = "Please type the project name"
            }
            )),
            document.querySelector("#todo-project-modal #close-dialog").addEventListener("click", (()=>{
                this.dialog.close()
            }
            ))
        }
        displaySingleTodoScreen(t, e) {
            this.pageTitle.textContent = "",
            this.navButton.textContent = "",
            this.actionButtons.textContent = "",
            this.itemsList.textContent = "",
            this.form.textContent = "",
            this.pageTitle.textContent = t.title,
            this.navButton.textContent = "< Back to Todos list",
            this.navButton.addEventListener("click", (t=>{
                this.displayTodosScreen(e)
            }
            ));
            const n = document.createElement("button");
            n.textContent = "Edit",
            this.actionButtons.appendChild(n),
            n.addEventListener("click", (o=>{
                if ("Edit" === n.textContent) {
                    n.textContent = "Save changes",
                    this.itemsList.textContent = "";
                    for (let e of this.#t.todoPropertiesToInject)
                        if ("Title" === e.name)
                            this.pageTitle.textContent = "",
                            this.pageTitle.appendChild(e.displayDetailsFromTodoAsEditable(t));
                        else {
                            if ("Checklist" === e.name)
                                continue;
                            this.itemsList.appendChild(e.displayDetailsFromTodoAsEditable(t))
                        }
                    const e = document.createElement("span");
                    e.setAttribute("id", "error-span"),
                    e.textContent = "",
                    this.itemsList.appendChild(e)
                } else {
                    const n = document.querySelector("#title-input")
                      , o = document.querySelector("#description")
                      , i = document.querySelector("#due-date")
                      , c = document.querySelector("#priority")
                      , d = document.querySelector("#notes");
                    if (0 === n.value.trim().length)
                        return void (document.querySelector("#error-span").textContent = "Todo must have a title");
                    t.title = n.value,
                    t.description = o.value,
                    t.dueDate = i.value,
                    t.priority = c.value,
                    t.notes = d.value,
                    this.displaySingleTodoScreen(t, e),
                    s.publish("localStorageUpdated")
                }
            }
            ));
            for (let n of this.#t.todoPropertiesToInject)
                "Title" !== n.name && this.itemsList.appendChild(n.displayElementsWithContentForTodoScreen(t, e));
            const o = document.querySelector("#checklist-add-button-todo")
              , i = document.querySelector("#checklist-input-todo");
            o.disabled = !0,
            i.addEventListener("input", (t=>{
                i.value.length > 0 ? o.disabled = !1 : o.disabled = !0
            }
            )),
            o.addEventListener("click", (n=>{
                let o = i.value;
                s.publish("checklistItemAdded", {
                    checklistItem: o,
                    todoItem: t,
                    projectItem: e
                })
            }
            ))
        }
    }
    ;
    let p;
    if (localStorage.getItem("allProjects")) {
        p = function(t) {
            const s = JSON.parse(localStorage.getItem("allProjects"))
              , i = new o;
            for (let t of s.projectsList) {
                const o = new n;
                for (let n of t.todoList) {
                    const t = new e;
                    for (let e of n.checkList) {
                        const n = e;
                        t.addChecklistItem(n.value, e.state)
                    }
                    for (let e in n)
                        "checkList" !== e && (t[e] = n[e]);
                    o.addTodo(t)
                }
                for (let e in t)
                    "todoList" !== e && (o[e] = t[e]);
                i.addProject(o)
            }
            return i
        }(),
        console.log(p);
        for (let t of p.projectsList)
            if (t.isDefault) {
                m.displayTodosScreen(t);
                break
            }
    } else {
        p = new o;
        const t = new n;
        t.setDefaultStatus(!0),
        t.title = "My Project",
        s.publish("projectItemAdded", t),
        m.displayTodosScreen(t)
    }
    function h({checklistItem: t, todoItem: e, projectItem: n}) {
        m.displaySingleTodoScreen(e, n),
        s.publish("localStorageUpdated")
    }
    function b({todoItem: t, projectItem: e}) {
        m.displayTodosScreen(e),
        s.publish("localStorageUpdated")
    }
    function f() {
        m.displayProjectsScreen(p),
        s.publish("localStorageUpdated")
    }
}
)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTJKLEVBQXdCRCxFQUM5QkQsRUFBaUJ4SixpQkFBaUIwSixFQUFzQnRKLE1BQU9xSixFQUFpQnZKLE1BQ3BGLENBR0EsSUFBSyxJQUFJMEksS0FBZ0JXLEVBQ0EsY0FBakJYLElBR0FZLEVBQWlCWixHQUFnQlcsRUFBWVgsSUFJckRVLEVBQW9CdkksUUFBUXlJLEVBQ2hDLENBR0EsSUFBSyxJQUFJRyxLQUFtQk4sRUFDQSxhQUFwQk0sSUFHQUwsRUFBb0JLLEdBQW1CTixFQUFlTSxJQUk5RFAsRUFBc0JoSSxXQUFXa0ksRUFDckMsQ0FDQSxPQUFPRixDQUNYLENIT2tCUSxHQUNkbkUsUUFBUUMsSUFBSUosR0FDWixJQUFLLElBQUlqRSxLQUFXaUUsRUFBWW5FLGFBQzVCLEdBQUlFLEVBQVFULFVBQVcsQ0FDbkJnRyxFQUFrQk0sbUJBQW1CN0YsR0FDckMsS0FDSixDQUVSLEtBcEIwQyxDQUV0Q2lFLEVBQWMsSUFBSXBFLEVBR2xCLE1BQU0ySSxFQUFzQixJQUFJcEosRUFDaENvSixFQUFvQmhKLGtCQUFpQixHQUNyQ2dKLEVBQW9CbkssTUFBUSxhQUM1QnlGLEVBQU94RCxRQUFRLG1CQUFvQmtJLEdBQ25DakQsRUFBa0JNLG1CQUFtQjJDLEVBRXpDLENBNkZBLFNBQVNoRSxHQUF1QixjQUFFZixFQUFhLFNBQUVsQixFQUFRLFlBQUVlLElBQ3ZEaUMsRUFBa0JjLHdCQUF3QjlELEVBQVVlLEdBQ3BEUSxFQUFPeEQsUUFBUSxzQkFDbkIsQ0FFQSxTQUFTZ0UsR0FBa0IsU0FBQy9CLEVBQVEsWUFBRWUsSUFDbENpQyxFQUFrQk0sbUJBQW1CdkMsR0FDckNRLEVBQU94RCxRQUFRLHNCQUNuQixDQUVBLFNBQVNpRSxJQUNMZ0IsRUFBa0JPLHNCQUFzQjdCLEdBQ3hDSCxFQUFPeEQsUUFBUSxzQkFDbkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvdG9kby1wcm9qZWN0LWNyZWF0b3JzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvRE9NLWZvcm0tdG9kb3NjcmVlbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLXJlY292ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdEl0ZW0sIEFsbFByb2plY3RzIH07XG5cbmNsYXNzIFRvZG9JdGVtIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzO1xuICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IFtdO1xuICAgICAgICAvLyBUT0RPIExBVEVSOiBBZGQgaW1hZ2VzXG4gICAgfVxuXG4gICAgYWRkQ2hlY2tsaXN0SXRlbShpdGVtLCBzdGF0ZSkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB7fTtcbiAgICAgICAgb2JqZWN0LnZhbHVlID0gaXRlbTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBvYmplY3Quc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iamVjdC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNoZWNrTGlzdC5wdXNoKG9iamVjdCk7XG4gICAgfVxuICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmNoZWNrTGlzdC5zcGxpY2UodGhpcy5jaGVja0xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuICAgIC8vIFRPRE86IHJlbW92ZSBjaGVja2xpc3QgaXRlbVxufVxuXG5jbGFzcyBQcm9qZWN0SXRlbSB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZTtcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IFtdO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpc0RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3RhdHVzO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRTdGF0dXMoYm9vbCkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0U3RhdHVzID0gYm9vbDtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UodGhpcy50b2RvTGlzdC5pbmRleE9mKHRvZG8pLCAxKTtcbiAgICB9XG59XG5cbmNsYXNzIEFsbFByb2plY3RzIHtcbiAgICBwcm9qZWN0c0xpc3QgPSBbXTtcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3Quc3BsaWNlKHRoaXMucHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIH1cbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudF0pIHJldHVybjtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSxcbn0iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdNb2RhbEZvcm0ge1xuICAgIFxuICAgIHByb2plY3RNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgaXNEZWZhdWx0LnRleHRDb250ZW50ID0gJ1NldCBhcyBkZWZhdWx0JztcbiAgICAgICAgY29uc3QgaXNEZWZhdWx0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpc0RlZmF1bHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaXNkZWZhdWx0Jyk7XG4gICAgICAgIGlzRGVmYXVsdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaXNkZWZhdWx0Jyk7XG4gICAgICAgIGlzRGVmYXVsdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRvbmVCdXR0b24udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgIGRvbmVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkb25lLWJ1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtZGlhbG9nJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZm9ybW1ldGhvZCcsICdkaWFsb2cnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXJyb3JTcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3Itc3BhbicpO1xuXG4gICAgICAgIHJldHVybiBmb3JtLmFwcGVuZCh0aXRsZSwgdGl0bGVJbnB1dCwgaXNEZWZhdWx0LCBpc0RlZmF1bHRJbnB1dCwgZG9uZUJ1dHRvbiwgY2xvc2VCdXR0b24sIGVycm9yU3Bhbik7XG4gICAgfVxuXG4gICAgdG9kb1Byb3BlcnRpZXNUb0luamVjdCA9IFtcbiAgICAgICAgbmV3IFRvZG9UaXRsZSgpLFxuICAgICAgICBuZXcgVG9kb0Rlc2NyaXB0aW9uKCksXG4gICAgICAgIG5ldyBUb2RvRHVlRGF0ZSgpLFxuICAgICAgICBuZXcgVG9kb1ByaW9yaXR5KCksXG4gICAgICAgIG5ldyBUb2RvTm90ZXMoKSxcbiAgICAgICAgbmV3IFRvZG9DaGVja2xpc3QoKSxcbiAgICBdXG5cbiAgICB0b2RvTW9kYWwocHJvcGVydGllcykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZm9ybVxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBmb3JtLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIC8vXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcGVydHkubmFtZUFzSFRNTEF0dHJpYnV0ZSk7XG5cbiAgICAgICAgICAgIGZvcm0uYXBwZW5kKGxhYmVsLCBwcm9wZXJ0eS5jcmVhdGVJbnB1dEVsZW1lbnRzRm9yRm9ybSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICAgICAgZG9uZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvbmUtYnV0dG9uJyk7XG4gICAgICAgIGRvbmVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtZGlhbG9nJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZm9ybW1ldGhvZCcsICdkaWFsb2cnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXJyb3JTcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3Itc3BhbicpO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kKGRvbmVCdXR0b24sIGNsb3NlQnV0dG9uLCBlcnJvclNwYW4pO1xuICAgIH1cblxufVxuXG4vLyBJbnRlcmZhY2VzID8oc3RpbGwgbm90IHN1cmUgd2hhdCB0aGlzIHRlcm0gbWVhbnMpLiBFYWNoIGluc3RhbmNlIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHRvZG8oKSBtZXRob2RcbmNsYXNzIFRvZG9UaXRsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUaXRsZSc7XG4gICAgICAgIHRoaXMubmFtZUFzSFRNTEF0dHJpYnV0ZSA9ICd0aXRsZSc7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUlucHV0RWxlbWVudHNGb3JGb3JtKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIC8vIFRoZSB0aXRsZSB3b24ndCBiZSByZW5kZXJlZCBhcyBhbiBpdGVtIGluIHRoZSBTaW5nbGUgVG9kbyBzY3JlZW4gYXMgaXQgd2lsbCBiZSB0aGUgVGl0bGUgb2YgdGhlIHdob2xlIHBhZ2UgaW5zdGVhZC4gVGhpcyBpcyB3aHkgdGhpcyBvbmUgd2lsbCBiZSBza2lwcGVkIHdoZW4gaXRlcmF0aW5nIHRoZSBwcm9wZXJ0aWVzIGluamVjdGVkIGluIERPTS5qc1xuXG4gICAgZGlzcGxheURldGFpbHNGcm9tVG9kb0FzRWRpdGFibGUodG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIFByZS1maWxsIGlucHV0IGZpZWxkcyB3aXRoIHNhdmVkIGRhdGFcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG9JdGVtLnRpdGxlO1xuICAgICAgICByZXR1cm4gdGl0bGVJbnB1dDtcbiAgICB9XG59XG5cbmNsYXNzIFRvZG9EZXNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIHRoaXMubmFtZUFzSFRNTEF0dHJpYnV0ZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUlucHV0RWxlbWVudHNGb3JGb3JtKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgZGlzcGxheUVsZW1lbnRzV2l0aENvbnRlbnRGb3JUb2RvU2NyZWVuKHRvZG9JdGVtKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHNldDtcbiAgICB9XG5cbiAgICBkaXNwbGF5RGV0YWlsc0Zyb21Ub2RvQXNFZGl0YWJsZSh0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWxlbWVudHNGb3JGb3JtKCk7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICAvLyBQcmUtZmlsbCBpbnB1dCBmaWVsZHMgd2l0aCBzYXZlZCBkYXRhICAgICAgICBcbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIGZpZWxkc2V0O1xuICAgIH1cbn1cblxuY2xhc3MgVG9kb0R1ZURhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnRHVlIERhdGUnO1xuICAgICAgICB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUgPSAnZHVlLWRhdGUnO1xuICAgIH1cbiAgICBjcmVhdGVJbnB1dEVsZW1lbnRzRm9yRm9ybSgpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlKTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGRpc3BsYXlFbGVtZW50c1dpdGhDb250ZW50Rm9yVG9kb1NjcmVlbih0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7IC8vIHRoaXMgaXMgd2hhdCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZFxuICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kdWVEYXRlO1xuICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICByZXR1cm4gZmllbGRzZXQ7XG4gICAgfVxuXG4gICAgZGlzcGxheURldGFpbHNGcm9tVG9kb0FzRWRpdGFibGUodG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0RWxlbWVudHNGb3JGb3JtKCk7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICAvLyBQcmUtZmlsbCBpbnB1dCBmaWVsZHMgd2l0aCBzYXZlZCBkYXRhXG4gICAgICAgIGlucHV0LnZhbHVlID0gdG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICAgICAgcmV0dXJuIGZpZWxkc2V0O1xuICAgIH1cbn1cblxuY2xhc3MgVG9kb1ByaW9yaXR5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1ByaW9yaXR5JztcbiAgICAgICAgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlID0gJ3ByaW9yaXR5JztcbiAgICB9XG4gICAgY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGNyZWF0ZVNlbGVjdFdpdGhQcmlvcml0eU9wdGlvbnMoKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG5cbiAgICBkaXNwbGF5RWxlbWVudHNXaXRoQ29udGVudEZvclRvZG9TY3JlZW4odG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpOyAvLyB0aGlzIGlzIHdoYXQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gdG9kb0l0ZW0ucHJpb3JpdHk7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHNldDtcbiAgICB9XG5cbiAgICBkaXNwbGF5RGV0YWlsc0Zyb21Ub2RvQXNFZGl0YWJsZSh0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0oKTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIC8vIFByZS1maWxsIGlucHV0IGZpZWxkcyB3aXRoIHNhdmVkIGRhdGFcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0b2RvSXRlbS5wcmlvcml0eTtcbiAgICAgICAgcmV0dXJuIGZpZWxkc2V0O1xuICAgIH1cbn1cblxuY2xhc3MgVG9kb05vdGVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ05vdGVzJztcbiAgICAgICAgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlID0gJ25vdGVzJztcbiAgICB9XG4gICAgY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMubmFtZUFzSFRNTEF0dHJpYnV0ZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZUFzSFRNTEF0dHJpYnV0ZSk7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBkaXNwbGF5RWxlbWVudHNXaXRoQ29udGVudEZvclRvZG9TY3JlZW4odG9kb0l0ZW0pIHtcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpOyAvLyB0aGlzIGlzIHdoYXQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gdG9kb0l0ZW0ubm90ZXM7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHNldDtcbiAgICB9XG5cbiAgICBkaXNwbGF5RGV0YWlsc0Zyb21Ub2RvQXNFZGl0YWJsZSh0b2RvSXRlbSkge1xuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0oKTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIC8vIFByZS1maWxsIGlucHV0IGZpZWxkcyB3aXRoIHNhdmVkIGRhdGFcbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5ub3RlcztcbiAgICAgICAgcmV0dXJuIGZpZWxkc2V0O1xuICAgIH1cbn1cblxuY2xhc3MgVG9kb0NoZWNrbGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdDaGVja2xpc3QnO1xuICAgICAgICB0aGlzLm5hbWVBc0hUTUxBdHRyaWJ1dGUgPSAnY2hlY2tsaXN0LWlucHV0JztcbiAgICB9XG4gICAgY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2xpc3QtZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlKTtcbiAgICAgICAgLy8gaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lQXNIVE1MQXR0cmlidXRlKTsgSUdOT1JFRCwgVE8gQ09ORklSTSFcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1hZGQtYnV0dG9uJyk7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBkaXNwbGF5RWxlbWVudHNXaXRoQ29udGVudEZvclRvZG9TY3JlZW4odG9kb0l0ZW0sIHByb2plY3RJdGVtKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTsgLy8gdGhpcyBpcyB3aGF0IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkXG4gICAgICAgIGZpZWxkc2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tsaXN0LWZpZWxkc2V0Jyk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgICAgICAgLy8gYWRkIG1vcmUgY2hlY2tsaXN0IGl0ZW1zXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbGlzdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tsaXN0LWlucHV0LXRvZG8nKTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1hZGQtYnV0dG9uLXRvZG8nKTtcbiAgICAgICAgZGl2LmFwcGVuZChjaGVja2xpc3RJbnB1dCwgYnV0dG9uKTtcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGZvciAobGV0IGNoZWNrbGlzdEl0ZW0gb2YgdG9kb0l0ZW0uY2hlY2tMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgaWYgKGNoZWNrbGlzdEl0ZW0uc3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7IC8vIGNoZWNrbGlzdCBpdGVtcyBhcmUgY3JlYXRlZCB3aXRoIGEgc3RhdGUgdmFsdWUgb2YgJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbS5zdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJdGVtLnN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SXRlbS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrbGlzdEl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNoZWNrbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQ2hlY2tsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuXG4gICAgICAgICAgICBkZWxldGVDaGVja2xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaCgnY2hlY2tsaXN0SXRlbURlbGV0ZWQnLCB7IGNoZWNrbGlzdEl0ZW0sIHRvZG9JdGVtLCBwcm9qZWN0SXRlbSB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxpLmFwcGVuZChpbnB1dCwgbGFiZWwsIGRlbGV0ZUNoZWNrbGlzdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHNldDtcbiAgICB9XG59XG5cblxuLy8gVG9kb1ByaW9yaXR5IEhlbHBlciBmdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0V2l0aFByaW9yaXR5T3B0aW9ucygpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwcmlvcml0aWVzID0gWydIaWdoJywgJ01lZGl1bScsICdOb3JtYWwnXTtcbiAgICAvLyBOZWVkIGEgZGVmYXVsdCBvcHRpb24gaW4gY2FzZSBubyBwcmlvcml0eSBpcyBzZWxlY3RlZFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkZWZhdWx0T3B0aW9uLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhbiBvcHRpb24nO1xuICAgIGRlZmF1bHRPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICBkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuXG4gICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJpb3JpdHlbMF0udG9Mb3dlckNhc2UoKSArIHByaW9yaXR5LnNsaWNlKDEpKTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdDtcbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSwgUHJvamVjdEl0ZW0sIEFsbFByb2plY3RzIH0gZnJvbSAnLi90b2RvLXByb2plY3QtY3JlYXRvcnMuanMnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yi5qcyc7XG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL0RPTS5qcydcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZS12YWxpZGF0b3IuanMnO1xuaW1wb3J0IHJldHJpZXZlU3RvcmVkRGF0YSBmcm9tICcuL3N0b3JhZ2UtcmVjb3Zlci5qcyc7XG5cbmV4cG9ydCB7YWxsUHJvamVjdHN9XG5cbi8vIEFkZCBzdWJzY3JpYmVyc1xucHVic3ViLnN1YnNjcmliZSgndG9kb0l0ZW1EZWxldGVkJywgZGVsZXRlVG9kbyk7IC8vIC4uLlRISU5LSU5HIEdFTU5JIFBST01QVCBUTyBVTkRFUlNUQU5EIEhPVyBUTyBERUxFVEUgQU4gT0JKRUNUIChUT0RPIE9SIFBST0pFQ1QpXG5wdWJzdWIuc3Vic2NyaWJlKCd0b2RvSXRlbUFkZGVkJywgYWRkTmV3VG9kbyk7XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RJdGVtRGVsZXRlZCcsIGRlbGV0ZVByb2plY3QpOyAvLyAuLi5USElOS0lORyBHRU1OSSBQUk9NUFQgVE8gVU5ERVJTVEFORCBIT1cgVE8gREVMRVRFIEFOIE9CSkVDVCAoVE9ETyBPUiBQUk9KRUNUKVxucHVic3ViLnN1YnNjcmliZSgncHJvamVjdEl0ZW1BZGRlZCcsIGFkZE5ld1Byb2plY3QpO1xuXG5wdWJzdWIuc3Vic2NyaWJlKCd0b2RvSXRlbUFkZGVkJywgdXBkYXRlVG9kb3NTY3JlZW4pO1xucHVic3ViLnN1YnNjcmliZSgndG9kb0l0ZW1EZWxldGVkJywgdXBkYXRlVG9kb3NTY3JlZW4pO1xuXG5wdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0SXRlbURlbGV0ZWQnLCB1cGRhdGVQcm9qZWN0c1NjcmVlbik7XG5wdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0SXRlbUFkZGVkJywgdXBkYXRlUHJvamVjdHNTY3JlZW4pO1xuXG5wdWJzdWIuc3Vic2NyaWJlKCdjaGVja2xpc3RJdGVtRGVsZXRlZCcsIGRlbGV0ZUNoZWNrbGlzdEl0ZW0pO1xucHVic3ViLnN1YnNjcmliZSgnY2hlY2tsaXN0SXRlbURlbGV0ZWQnLCB1cGRhdGVTaW5nbGVUb2RvU2NyZWVuKTtcblxucHVic3ViLnN1YnNjcmliZSgnY2hlY2tsaXN0SXRlbUFkZGVkJywgYWRkQ2hlY2tsaXN0SXRlbSk7XG5wdWJzdWIuc3Vic2NyaWJlKCdjaGVja2xpc3RJdGVtQWRkZWQnLCB1cGRhdGVTaW5nbGVUb2RvU2NyZWVuKTtcblxucHVic3ViLnN1YnNjcmliZSgndXBkYXRlUHJvamVjdERlZmF1bHRTdGF0dXMnLCB1cGRhdGVQcm9qZWN0RGVmYXVsdFN0YXR1cyk7XG5cbi8vIFB1YnN1YiBmb3Igc3RvcmFnZSBldmVudHNcbnB1YnN1Yi5zdWJzY3JpYmUoJ2xvY2FsU3RvcmFnZVVwZGF0ZWQnLCB1cGRhdGVMb2NhbFN0b3JhZ2UpO1xuXG5cbi8vIHNob3cgUHJvamVjdFggc2NyZWVuIGJ5IGRlZmF1bHRcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXIoKTtcblxuXG4vLyBTVE9SQUdFXG5sZXQgYWxsUHJvamVjdHM7XG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKSB7XG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIEFsbCBQcm9qZWN0cyBjbGFzcyBvbmx5IG9uY2VcbiAgICBhbGxQcm9qZWN0cyA9IG5ldyBBbGxQcm9qZWN0cygpO1xuXG4gICAgLy8gSWYgbm8gcHJldmlvdXMgc3RvcmFnZSBtYW5pcHVsYXRpb24sIGNyZWF0ZSBkZWZhdWx0IFwiTXkgUHJvamVjdFwiXG4gICAgY29uc3QgZmlyc3REZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0SXRlbSgpO1xuICAgIGZpcnN0RGVmYXVsdFByb2plY3Quc2V0RGVmYXVsdFN0YXR1cyh0cnVlKTtcbiAgICBmaXJzdERlZmF1bHRQcm9qZWN0LnRpdGxlID0gJ015IFByb2plY3QnO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0SXRlbUFkZGVkJywgZmlyc3REZWZhdWx0UHJvamVjdCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRvZG9zU2NyZWVuKGZpcnN0RGVmYXVsdFByb2plY3QpOyAvLyBUT0RPOiBuZWVkIHRvIGRlY2lkZSBob3cgdGhlIGRlZmF1bHQgd2lsbCBiZSBzZXQgXG4gICAgXG59IGVsc2Uge1xuICAgIGFsbFByb2plY3RzID0gcmV0cmlldmVTdG9yZWREYXRhKCdhbGxQcm9qZWN0cycpO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzLnByb2plY3RzTGlzdCkge1xuICAgICAgICBpZiAocHJvamVjdC5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUb2Rvc1NjcmVlbihwcm9qZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuUEVORElORzpcbi0gQUREIFNUT1JBR0VcbiovXG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHB1YnN1YlxuLy8gRnVuY3Rpb25zIHRvIGNyZWF0ZSBuZXcgVG9kbyBvciBQcm9qZWN0IGl0ZW1zLCBvciBhZGQgbmV3IGNoZWNrbGlzdCBpdGVtc1xuZnVuY3Rpb24gYWRkTmV3VG9kbyh7dG9kb0l0ZW0sIHByb2plY3RJdGVtfSkge1xuICAgIGxldCBuZXdUb2RvSXRlbSA9IG5ldyBUb2RvSXRlbSgpO1xuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRvZG9JdGVtKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ19zdGF0ZScpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnZHVlLWRhdGUnKSB7IC8vIGFzIEhUTUwgYXR0cmlidXRlIGZvciBuYW1lIGlzICdkdWUtZGF0ZScgd2hlcmVhcyB0b2RvSXRlbSBwcm9wZXJ0eSBpcyAnZHVlRGF0ZSdcbiAgICAgICAgICAgICAgICBuZXdUb2RvSXRlbS5kdWVEYXRlID0gdG9kb0l0ZW1bcHJvcGVydHldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdUb2RvSXRlbVtwcm9wZXJ0eV0gPSB0b2RvSXRlbVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIHByb2plY3RJdGVtLmFkZFRvZG8obmV3VG9kb0l0ZW0pO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdEl0ZW0pIHtcbiAgICBsZXQgbmV3UHJvamVjdEl0ZW0gPSBuZXcgUHJvamVjdEl0ZW0oKTtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBwcm9qZWN0SXRlbSkgeyAvLyBwcm9qZWN0SXRlbSBkb2VzIG5vdCBoYXZlICNkZWZhdWx0U3RhdHVzICh3aGVuIHBhc3NlZCBmcm9tIGZvcm0pIE9SIGhhcyBpdCBmb3IgZmlyc3REZWZhdWx0UHJvamVjdFxuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdfZGVmYXVsdFN0YXR1cycpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnaXNkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0SXRlbS5pc2RlZmF1bHQgPT09ICdvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdEl0ZW0uc2V0RGVmYXVsdFN0YXR1cyh0cnVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gTm93IHdlIG5lZWQgdG8gc2V0IHRoZSBSRVNUIG9mIHByb2plY3RJdGVtcyBmcm9tIGFsbFByb2plY3RzIGFzIG5vdCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMucHJvamVjdHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC5pc0RlZmF1bHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Quc2V0RGVmYXVsdFN0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEl0ZW0udGl0bGUsICdwcm9qZWN0IGlzIG5vdyB0aGUgZGVmYXVsdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RJdGVtLnNldERlZmF1bHRTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEl0ZW1bcHJvcGVydHldID0gcHJvamVjdEl0ZW1bcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9qZWN0SXRlbS5pc0RlZmF1bHQpIHsgLy8gVGhpcyBzdGF0ZW1lbnQgb25seSB1c2VmdWwgZm9yIHRoZSBmaXJzdERlZmF1bHRQcm9qZWN0XG4gICAgICAgIHByb2plY3RJdGVtLmlzRGVmYXVsdCgpID8gbmV3UHJvamVjdEl0ZW0uc2V0RGVmYXVsdFN0YXR1cyh0cnVlKSA6IG5ld1Byb2plY3RJdGVtLnNldERlZmF1bHRTdGF0dXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGFsbFByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdEl0ZW0pO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZENoZWNrbGlzdEl0ZW0oeyBjaGVja2xpc3RJdGVtLCB0b2RvSXRlbSB9KSB7XG4gICAgdG9kb0l0ZW0uYWRkQ2hlY2tsaXN0SXRlbShjaGVja2xpc3RJdGVtKTtcbiAgICBwdWJzdWIucHVibGlzaCgnbG9jYWxTdG9yYWdlVXBkYXRlZCcpO1xufVxuXG4vLyBGdW5jdGlvbnMgdG8gZGVsZXRlIENoZWNrbGlzdCwgVG9kbyBvciBQcm9qZWN0IGl0ZW1zXG5mdW5jdGlvbiBkZWxldGVDaGVja2xpc3RJdGVtKHsgY2hlY2tsaXN0SXRlbSwgdG9kb0l0ZW0gfSkge1xuICAgIHRvZG9JdGVtLnJlbW92ZUNoZWNrbGlzdEl0ZW0oY2hlY2tsaXN0SXRlbSk7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2xvY2FsU3RvcmFnZVVwZGF0ZWQnKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SXRlbSkge1xuICAgIGFsbFByb2plY3RzLnJlbW92ZVByb2plY3QocHJvamVjdEl0ZW0pO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oe3RvZG9JdGVtLCBwcm9qZWN0SXRlbX0pIHtcbiAgICBwcm9qZWN0SXRlbS5yZW1vdmVUb2RvKHRvZG9JdGVtKTtcbiAgICBwdWJzdWIucHVibGlzaCgnbG9jYWxTdG9yYWdlVXBkYXRlZCcpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgRE9NIGFmdGVyIGFueSBldmVudCByZWxhdGVkIHRvIGRhdGEgbW9kaWZpY2F0aW9uICh0aGF0IGlzIHZpc2libGUgdG8gdXNlcikgaXMgdHJpZ2dlcmVkXG5mdW5jdGlvbiB1cGRhdGVTaW5nbGVUb2RvU2NyZWVuKHsgY2hlY2tsaXN0SXRlbSwgdG9kb0l0ZW0sIHByb2plY3RJdGVtIH0pIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2luZ2xlVG9kb1NjcmVlbih0b2RvSXRlbSwgcHJvamVjdEl0ZW0pO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9zU2NyZWVuKHt0b2RvSXRlbSwgcHJvamVjdEl0ZW19KSB7IC8vIE5vdGUgZGVzdHJ1Y3R1cmluZyBpcyB1c2VkIGhlcmVcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VG9kb3NTY3JlZW4ocHJvamVjdEl0ZW0pO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzU2NyZWVuKCkgeyAvLyBcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5UHJvamVjdHNTY3JlZW4oYWxsUHJvamVjdHMpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBMb2NhbCBTdG9yYWdlXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgVXBkYXRlZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1cycpO1xuICAgIH1cbn1cblxuLy9cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3REZWZhdWx0U3RhdHVzKHByb2plY3RJdGVtKSB7XG4gICAgcHJvamVjdEl0ZW0uc2V0RGVmYXVsdFN0YXR1cyh0cnVlKTtcbiAgICAvLyBOb3cgd2UgbmVlZCB0byBzZXQgdGhlIFJFU1Qgb2YgcHJvamVjdEl0ZW1zIGZyb20gYWxsUHJvamVjdHMgYXMgbm90IGRlZmF1bHRcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzLnByb2plY3RzTGlzdCkge1xuICAgICAgICBpZiAocHJvamVjdEl0ZW0gIT09IHByb2plY3QgJiYgcHJvamVjdC5pc0RlZmF1bHQoKSkge1xuICAgICAgICAgICAgcHJvamVjdC5zZXREZWZhdWx0U3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG59XG5cbi8qIExJU1QgT0YgVEhJTkdTIEkgRE9OJ1QgTElLRSBBQk9VVCBUSElTIFdFQkFQUFxuICAgIC0gTWFudWFsbHkgYWRkaW5nIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJykgdG8gZXZlcnkgc2luZ2xlIHBsYWNlIHdoZXJlIGRhdGEgaXMgY2hhbmdlZC4gUGVyaGFwcyBJIGNvdWxkIGFkZCB0aGUgcHVibGlzaCB0byB0aGUgb2JqZWN0IG1ldGhvZHMgZGlyZWN0bHk/XG4gICAgLSBMb3RzIG9mIERSWSBwcmluY2lwbGUgdmlvbGF0aW9uc1xuKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxuICB9IiwiaW1wb3J0IE1vZGFsRm9ybSBmcm9tICcuL0RPTS1mb3JtLXRvZG9zY3JlZW4uanMnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yi5qcyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vaW5kZXguanMnO1xuXG4vLyBBbGwgcHJvamVjdHMgcGFnZT8gT1IgQUxMIExPR0lDIElOIDEgQ0xBU1M/IFJFTUVNQkVSIFRISVMgSVMgTE9HSUMsIEVWRU5UUyBMSVNURU5FUiBTSE9VTEQgQkUgQURERUQgSEVSRS4gdG9kb01vZGFsKCkgY2FsbCBzaG91bGQgcmV0dXJuIGEgbm9kZSB0byB3aGljaCBJIHNob3VsZCBhZGQgdGhlIGV2ZW50bGlzdGVuZXJzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01Db250cm9sbGVyIHtcbiAgICAjbW9kYWxGb3JtID0gbmV3IE1vZGFsRm9ybSgpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gICAgICAgIHRoaXMubmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgICAgIHRoaXMuYWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb24tYnV0dG9ucycpO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtcy1saXN0Jyk7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGxheVRvZG9zU2NyZWVuKHByb2plY3RJdGVtKSB7XG4gICAgICAgIC8vIENsZWFyIHNjcmVlblxuICAgICAgICB0aGlzLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLm5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGlvbkJ1dHRvbnMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgLy8gQ2hhbmdlIG1vZGFsIEhUTUxcbiAgICAgICAgdGhpcy4jbW9kYWxGb3JtLnRvZG9Nb2RhbCh0aGlzLiNtb2RhbEZvcm0udG9kb1Byb3BlcnRpZXNUb0luamVjdCk7IFxuXG4gICAgICAgIC8vIE5hbWUgb2Ygc2NyZWVuXG4gICAgICAgIHRoaXMucGFnZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdEl0ZW0udGl0bGU7XG4gICAgICAgIFxuICAgICAgICAvLyBOYXYgYnV0dG9ucy4gQ3VycmVudGx5IG9ubHkgb25lIHRoYXQgdGFrZXMgdXNlcnMgYmFjayB0byB0aGUgUHJvamVjdHMgc2NyZWVuXG4gICAgICAgIHRoaXMubmF2QnV0dG9uLnRleHRDb250ZW50ID0gJzwgQmFjayB0byBQcm9qZWN0cyc7XG4gICAgICAgIHRoaXMubmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlQcm9qZWN0c1NjcmVlbihhbGxQcm9qZWN0cyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbnMuIEJ1dHRvbiB0byBhZGQgTmV3IFRvZG8gaXRlbSB0byB0aGUgcHJvamVjdCBBTkQgU2V0IGRlZmF1bHQgY2hlY2tib3hcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb2RvLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICAgICAgdGhpcy5hY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuICAgICAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNldERlZmF1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBzZXREZWZhdWx0UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2V0RGVmYXVsdFByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdTZXQgYXMgZGVmYXVsdCc7XG4gICAgICAgIHNldERlZmF1bHRQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2V0LWFzLWRlZmF1bHQtaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBzZXREZWZhdWx0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2V0RGVmYXVsdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgc2V0RGVmYXVsdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NldC1hcy1kZWZhdWx0LWlucHV0Jyk7XG4gICAgICAgIGlmIChwcm9qZWN0SXRlbS5pc0RlZmF1bHQoKSkge1xuICAgICAgICAgICAgc2V0RGVmYXVsdFByb2plY3RJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldERlZmF1bHRQcm9qZWN0SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldERlZmF1bHRQcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2V0RGVmYXVsdFByb2plY3RJbnB1dC52YWx1ZSA9PT0gJ29uJykge1xuICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd1cGRhdGVQcm9qZWN0RGVmYXVsdFN0YXR1cycsIHByb2plY3RJdGVtKTtcbiAgICAgICAgICAgICAgICBzZXREZWZhdWx0UHJvamVjdElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXREZWZhdWx0RGl2LmFwcGVuZChzZXREZWZhdWx0UHJvamVjdExhYmVsLCBzZXREZWZhdWx0UHJvamVjdElucHV0KTtcbiAgICAgICAgdGhpcy5hY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKHNldERlZmF1bHREaXYpO1xuXG4gICAgICAgIC8vIEl0ZW1zIGxpc3QuIEFsbCB0b2RvIGl0ZW1zIGFyZSBsb2FkZWQgYW5kIGRpc3BsYXllZCBoZXJlXG4gICAgICAgIGlmIChwcm9qZWN0SXRlbS50b2RvTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnRleHRDb250ZW50ID0gJ1RoZXJlIGFyZSBubyB0b2RvcyBoZXJlLi4uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgdG9kb0l0ZW0gb2YgcHJvamVjdEl0ZW0udG9kb0xpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVNpbmdsZVRvZG9TY3JlZW4odG9kb0l0ZW0sIHByb2plY3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gZ2VuZXJhdGVkIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3RvZG9JdGVtRGVsZXRlZCcsIHt0b2RvSXRlbSwgcHJvamVjdEl0ZW19KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9kYWwgQ2hlY2tsaXN0IGJ1dHRvblxuICAgICAgICBjb25zdCBjaGVja2xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWRpdicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrbGlzdC1hZGQtYnV0dG9uJyk7XG4gICAgICAgIGNoZWNrbGlzdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNoZWNrbGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tsaXN0SW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2xpc3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNoZWNrbGlzdERpdi5hcHBlbmRDaGlsZChjaGVja2xpc3RVbCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QXJyYXkgPSBbXTsgLy8gZm9yIHRlbXBvcmFyeSBzdG9yZSB0byB0aGVuIHBhc3MgaXQgb25jZSB0aGUgdG9kb0l0ZW0gaXMgY3JlYXRlZCAod2l0aCBkb25lIGJ1dHRvbilcbiAgICAgICAgY2hlY2tsaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3RPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIGNoZWNrbGlzdE9iamVjdC52YWx1ZSA9IGNoZWNrbGlzdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgY2hlY2tsaXN0QXJyYXkucHVzaChjaGVja2xpc3RPYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBjaGVja2xpc3RJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNoZWNrbGlzdFVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIGNoZWNrbGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjaGVja2xpc3RJbnB1dC5mb2N1cygpO1xuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICAvLyBOZXcgVG9kbyBjcmVhdGlvbiBNb2RhbC4gRG9uZSArIENhbmNlbCBidXR0b25zIGltcGxlbWVudGVkLiBDaGVjayBmb3JtLWh0bWwuanMgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByb2plY3QtbW9kYWwgI2RvbmUtYnV0dG9uJylcbiAgICAgICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gIE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuXG4gICAgICAgICAgICBpZiAodG9kb0l0ZW0udGl0bGUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLXNwYW4nKTtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYWRkIGEgdGl0bGUnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9kb0l0ZW0uY2hlY2tMaXN0ID0gY2hlY2tsaXN0QXJyYXk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgndG9kb0l0ZW1BZGRlZCcsIHt0b2RvSXRlbSwgcHJvamVjdEl0ZW19KTsgLy8gVE9ETz8gYWRkIHN1YnNjcmliZXJzIHdoZXJlIG5lZWRlZFxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvamVjdC1tb2RhbCAjY2xvc2UtZGlhbG9nJyk7XG4gICAgICAgIG1vZGFsQ2FuY2VsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZGlzcGxheVByb2plY3RzU2NyZWVuKGFsbFByb2plY3RzKSB7XG4gICAgICAgIC8vIENsZWFyIHNjcmVlblxuICAgICAgICB0aGlzLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLm5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGlvbkJ1dHRvbnMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgLy8gQ2hhbmdlIG1vZGFsIEhUTUxcbiAgICAgICAgdGhpcy4jbW9kYWxGb3JtLnByb2plY3RNb2RhbCgpOyBcblxuICAgICAgICAvLyBOYW1lIG9mIHNjcmVlblxuICAgICAgICB0aGlzLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgUHJvamVjdHMnO1xuICAgICAgICBcbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbnMuIEN1cnJlbnRseSBvbmx5IGEgYnV0dG9uIHRvIGFkZCBOZXcgUHJvamVjdCBpdGVtLlxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICB0aGlzLmFjdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJdGVtcyBsaXN0LiBBbGwgUHJvamVjdCBpdGVtcyBhcmUgbG9hZGVkIGFuZCBkaXNwbGF5ZWQgaGVyZVxuICAgICAgICBpZiAoYWxsUHJvamVjdHMucHJvamVjdHNMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudGV4dENvbnRlbnQgPSAnVGhlcmUgYXJlIG5vIHByb2plY3RzLi4uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdEl0ZW0gb2YgYWxsUHJvamVjdHMucHJvamVjdHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdEl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2Rvc1NjcmVlbihwcm9qZWN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgYnV0dG9uIGdlbmVyYXRlZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0SXRlbURlbGV0ZWQnLCBwcm9qZWN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAvLyBOZXcgUHJvamVjdCBjcmVhdGlvbiBNb2RhbC4gRG9uZSArIENhbmNlbCBidXR0b25zIGltcGxlbWVudGVkLiBDaGVjayBmb3JtLWh0bWwuanMgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByb2plY3QtbW9kYWwgI2RvbmUtYnV0dG9uJylcbiAgICAgICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJdGVtT2JqZWN0ID0gIE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdEl0ZW1PYmplY3QudGl0bGUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLXNwYW4nKTtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICdQbGVhc2UgdHlwZSB0aGUgcHJvamVjdCBuYW1lJztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0SXRlbUFkZGVkJywgcHJvamVjdEl0ZW1PYmplY3QpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvamVjdC1tb2RhbCAjY2xvc2UtZGlhbG9nJyk7XG4gICAgICAgIG1vZGFsQ2FuY2VsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkaXNwbGF5U2luZ2xlVG9kb1NjcmVlbih0b2RvSXRlbSwgcHJvamVjdEl0ZW0pIHtcbiAgICAgICAgLy8gQ2xlYXIgc2NyZWVuIC9cbiAgICAgICAgdGhpcy5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5uYXZCdXR0b24udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5hY3Rpb25CdXR0b25zLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIC8vIE5hbWUgb2Ygc2NyZWVuIC9cbiAgICAgICAgdGhpcy5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcbiAgICAgICAgXG4gICAgICAgIC8vIE5hdiBidXR0b25zLiBDdXJyZW50bHkgb25seSBvbmUgdGhhdCB0YWtlcyB1c2VycyBiYWNrIHRvIHRoZSBUb2RvcyBzY3JlZW4gL1xuICAgICAgICAvLyBjb25zdCBwcm9qZWN0SXRlbSA9IHRvZG9JdGVtLmdldFBhcmVudCgpO1xuICAgICAgICB0aGlzLm5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICc8IEJhY2sgdG8gVG9kb3MgbGlzdCc7XG4gICAgICAgIHRoaXMubmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2Rvc1NjcmVlbihwcm9qZWN0SXRlbSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbnMuIEN1cnJlbnRseSBvbmx5IGEgYnV0dG9uIHRvIGFkZCBOZXcgUHJvamVjdCBpdGVtLiAqXG4gICAgICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICB0aGlzLmFjdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdFRvZG9CdXR0b24pO1xuICAgICAgICAgICAgLy8gRURJVCBNT0RFXG4gICAgICAgIGVkaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZWRpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPT09ICdFZGl0Jykge1xuICAgICAgICAgICAgICAgIC8vIENoYW5nZSB0b2RvIHNjcmVlbiB0byBFZGl0IG1vZGVcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlIGNoYW5nZXMnO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0b2RvUHJvcGVydHkgb2YgdGhpcy4jbW9kYWxGb3JtLnRvZG9Qcm9wZXJ0aWVzVG9JbmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcm9wZXJ0eS5uYW1lID09PSAnVGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlVGl0bGUuYXBwZW5kQ2hpbGQodG9kb1Byb3BlcnR5LmRpc3BsYXlEZXRhaWxzRnJvbVRvZG9Bc0VkaXRhYmxlKHRvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b2RvUHJvcGVydHkubmFtZSA9PT0gJ0NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuYXBwZW5kQ2hpbGQodG9kb1Byb3BlcnR5LmRpc3BsYXlEZXRhaWxzRnJvbVRvZG9Bc0VkaXRhYmxlKHRvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFseSBhIHNwYW4gYm94IHRvIHNob3cgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JTcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3Itc3BhbicpXG4gICAgICAgICAgICAgICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuYXBwZW5kQ2hpbGQoZXJyb3JTcGFuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIFdoZW4gaXQncyB0aGUgU2F2ZSBjaGFuZ2VzIGJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0b2RvIGl0ZW1zIHdpdGggbmV3bHkgYWRkZWQgZGF0YSBcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1zcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICdUb2RvIG11c3QgaGF2ZSBhIHRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvZG9JdGVtLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5RmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0ubm90ZXMgPSBub3Rlc0ZpZWxkLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2luZ2xlVG9kb1NjcmVlbih0b2RvSXRlbSwgcHJvamVjdEl0ZW0pO1xuICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdsb2NhbFN0b3JhZ2VVcGRhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEl0ZW1zIGxpc3QuIEFsbCB0b2RvIGl0ZW1zIGFyZSBsb2FkZWQgYW5kIGRpc3BsYXllZCBoZXJlXG4gICAgICAgIGZvciAobGV0IHRvZG9Qcm9wZXJ0eSBvZiB0aGlzLiNtb2RhbEZvcm0udG9kb1Byb3BlcnRpZXNUb0luamVjdCkgeyAvL2FycmF5IG9mIG9iamVjdHMgdGhhdCBoYXZlIGEgbWV0aG9kIHRvIGNyZWF0ZSBkaXNwbGF5IGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAodG9kb1Byb3BlcnR5Lm5hbWUgPT09ICdUaXRsZScpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuYXBwZW5kQ2hpbGQodG9kb1Byb3BlcnR5LmRpc3BsYXlFbGVtZW50c1dpdGhDb250ZW50Rm9yVG9kb1NjcmVlbih0b2RvSXRlbSwgcHJvamVjdEl0ZW0pKTsgLy8gZW5kIG9mIGJsb2NrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVja2xpc3QgYWRkIGJ1dHRvblxuICAgICAgICBjb25zdCBjaGVja2xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWFkZC1idXR0b24tdG9kbycpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtaW5wdXQtdG9kbycpO1xuICAgICAgICBjaGVja2xpc3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjaGVja2xpc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrbGlzdElucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja2xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtID0gY2hlY2tsaXN0SW5wdXQudmFsdWVcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjaGVja2xpc3RJdGVtQWRkZWQnLCB7IGNoZWNrbGlzdEl0ZW0sIHRvZG9JdGVtLCBwcm9qZWN0SXRlbSB9KTtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgVG9kb0l0ZW0sIFByb2plY3RJdGVtLCBBbGxQcm9qZWN0cyB9IGZyb20gJy4vdG9kby1wcm9qZWN0LWNyZWF0b3JzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0cmlldmVTdG9yZWREYXRhKGtleSkge1xuICAgIGNvbnN0IGFsbE15UmF3UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gICAgY29uc3QgYWxsTXlSZXN0b3JlZFByb2plY3RzID0gbmV3IEFsbFByb2plY3RzKCk7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0SXRlbVJhdyBvZiBhbGxNeVJhd1Byb2plY3RzLnByb2plY3RzTGlzdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbVJlc3RvcmVkID0gbmV3IFByb2plY3RJdGVtKCk7XG4gICAgICBcbiAgICAgICAgLy8gJ0ZvciBvZicgbG9vcHMgdG8gcmVzdG9yZSB0aGUgdG9kb0xpc3QgYW5kIGNoZWNrTGlzdCBvbmx5IFxuICAgICAgICBmb3IgKGxldCB0b2RvSXRlbVJhdyBvZiBwcm9qZWN0SXRlbVJhdy50b2RvTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1SZXN0b3JlZCA9IG5ldyBUb2RvSXRlbSgpO1xuXG4gICAgICAgICAgICAvLyBjaGVja0xpc3QgaXMganVzdCBhbiBhcnJheSBzbyB3ZSBqdXN0IGNvcHlcbiAgICAgICAgICAgIGZvciAobGV0IGNoZWNrbGlzdEl0ZW1SYXcgb2YgdG9kb0l0ZW1SYXcuY2hlY2tMaXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0SXRlbVJlc3RvcmVkID0gY2hlY2tsaXN0SXRlbVJhdztcbiAgICAgICAgICAgICAgICB0b2RvSXRlbVJlc3RvcmVkLmFkZENoZWNrbGlzdEl0ZW0oY2hlY2tsaXN0SXRlbVJlc3RvcmVkLnZhbHVlLCBjaGVja2xpc3RJdGVtUmF3LnN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gJ0ZvciBpbicgdG8gcmVzdG9yZSB0b2RvIHByb3BlcnRpZXMgZXhjZXB0IGZvciBjaGVja0xpc3RcbiAgICAgICAgICAgIGZvciAobGV0IHRvZG9Qcm9wZXJ0eSBpbiB0b2RvSXRlbVJhdykge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvUHJvcGVydHkgPT09ICdjaGVja0xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9JdGVtUmVzdG9yZWRbdG9kb1Byb3BlcnR5XSA9IHRvZG9JdGVtUmF3W3RvZG9Qcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0SXRlbVJlc3RvcmVkLmFkZFRvZG8odG9kb0l0ZW1SZXN0b3JlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAnRm9yIGluJyB0byByZXN0b3JlIHByb2plY3QgcHJvcGVydGllcyBleGNlcHQgZm9yIHRvZG9MaXN0XG4gICAgICAgIGZvciAobGV0IHByb2plY3RQcm9wZXJ0eSBpbiBwcm9qZWN0SXRlbVJhdykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RQcm9wZXJ0eSA9PT0gJ3RvZG9MaXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SXRlbVJlc3RvcmVkW3Byb2plY3RQcm9wZXJ0eV0gPSBwcm9qZWN0SXRlbVJhd1twcm9qZWN0UHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbGxNeVJlc3RvcmVkUHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0SXRlbVJlc3RvcmVkKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbE15UmVzdG9yZWRQcm9qZWN0cztcbn0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUb2RvSXRlbSIsImNvbnN0cnVjdG9yIiwidGhpcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJub3RlcyIsImNoZWNrTGlzdCIsImFkZENoZWNrbGlzdEl0ZW0iLCJpdGVtIiwic3RhdGUiLCJvYmplY3QiLCJ2YWx1ZSIsInB1c2giLCJyZW1vdmVDaGVja2xpc3RJdGVtIiwic3BsaWNlIiwiaW5kZXhPZiIsIlByb2plY3RJdGVtIiwiX2RlZmF1bHRTdGF0dXMiLCJ0b2RvTGlzdCIsImlzRGVmYXVsdCIsInNldERlZmF1bHRTdGF0dXMiLCJib29sIiwiYWRkVG9kbyIsInRvZG8iLCJyZW1vdmVUb2RvIiwiQWxsUHJvamVjdHMiLCJwcm9qZWN0c0xpc3QiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJldmVudHMiLCJzdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwicHVibGlzaCIsImRhdGEiLCJmb3JFYWNoIiwiTmV3TW9kYWxGb3JtIiwicHJvamVjdE1vZGFsIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpc0RlZmF1bHRJbnB1dCIsImRvbmVCdXR0b24iLCJjbG9zZUJ1dHRvbiIsImVycm9yU3BhbiIsImFwcGVuZCIsInRvZG9Qcm9wZXJ0aWVzVG9JbmplY3QiLCJUb2RvVGl0bGUiLCJUb2RvRGVzY3JpcHRpb24iLCJUb2RvRHVlRGF0ZSIsIlRvZG9Qcmlvcml0eSIsIlRvZG9Ob3RlcyIsIlRvZG9DaGVja2xpc3QiLCJ0b2RvTW9kYWwiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJsYWJlbCIsIm5hbWUiLCJuYW1lQXNIVE1MQXR0cmlidXRlIiwiY3JlYXRlSW5wdXRFbGVtZW50c0ZvckZvcm0iLCJpbnB1dCIsImRpc3BsYXlEZXRhaWxzRnJvbVRvZG9Bc0VkaXRhYmxlIiwidG9kb0l0ZW0iLCJkaXNwbGF5RWxlbWVudHNXaXRoQ29udGVudEZvclRvZG9TY3JlZW4iLCJmaWVsZHNldCIsImxlZ2VuZCIsImFwcGVuZENoaWxkIiwicCIsInNlbGVjdCIsInByaW9yaXRpZXMiLCJkZWZhdWx0T3B0aW9uIiwib3B0aW9uIiwidG9Mb3dlckNhc2UiLCJzbGljZSIsImNyZWF0ZVNlbGVjdFdpdGhQcmlvcml0eU9wdGlvbnMiLCJkaXYiLCJidXR0b24iLCJwcm9qZWN0SXRlbSIsImNoZWNrbGlzdElucHV0IiwidWwiLCJjaGVja2xpc3RJdGVtIiwibGkiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwdWJzdWIiLCJkZWxldGVDaGVja2xpc3RCdXR0b24iLCJuZXdUb2RvSXRlbSIsImFsbFByb2plY3RzIiwibmV3UHJvamVjdEl0ZW0iLCJpc2RlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVG9kb3NTY3JlZW4iLCJ1cGRhdGVQcm9qZWN0c1NjcmVlbiIsInVwZGF0ZVNpbmdsZVRvZG9TY3JlZW4iLCJ0eXBlIiwic3RvcmFnZSIsIndpbmRvdyIsIngiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJsZW5ndGgiLCJzdG9yYWdlQXZhaWxhYmxlIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcGxheUNvbnRyb2xsZXIiLCJwYWdlVGl0bGUiLCJuYXZCdXR0b24iLCJhY3Rpb25CdXR0b25zIiwiaXRlbXNMaXN0IiwiZGlhbG9nIiwiZGlzcGxheVRvZG9zU2NyZWVuIiwiZGlzcGxheVByb2plY3RzU2NyZWVuIiwic2hvd01vZGFsIiwic2V0RGVmYXVsdERpdiIsInNldERlZmF1bHRQcm9qZWN0TGFiZWwiLCJzZXREZWZhdWx0UHJvamVjdElucHV0IiwiZGlzYWJsZWQiLCJzcGFuIiwiZGlzcGxheVNpbmdsZVRvZG9TY3JlZW4iLCJkZWxldGVCdXR0b24iLCJjaGVja2xpc3REaXYiLCJjaGVja2xpc3RCdXR0b24iLCJjaGVja2xpc3RVbCIsImNoZWNrbGlzdEFycmF5IiwiY2hlY2tsaXN0T2JqZWN0IiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJ0cmltIiwicmVzZXQiLCJjbG9zZSIsInByb2plY3RJdGVtT2JqZWN0IiwiZWRpdFRvZG9CdXR0b24iLCJ0b2RvUHJvcGVydHkiLCJkZXNjcmlwdGlvbkZpZWxkIiwiZHVlRGF0ZUZpZWxkIiwicHJpb3JpdHlGaWVsZCIsIm5vdGVzRmllbGQiLCJnZXRJdGVtIiwiYWxsTXlSYXdQcm9qZWN0cyIsInBhcnNlIiwiYWxsTXlSZXN0b3JlZFByb2plY3RzIiwicHJvamVjdEl0ZW1SYXciLCJwcm9qZWN0SXRlbVJlc3RvcmVkIiwidG9kb0l0ZW1SYXciLCJ0b2RvSXRlbVJlc3RvcmVkIiwiY2hlY2tsaXN0SXRlbVJhdyIsImNoZWNrbGlzdEl0ZW1SZXN0b3JlZCIsInByb2plY3RQcm9wZXJ0eSIsInJldHJpZXZlU3RvcmVkRGF0YSIsImZpcnN0RGVmYXVsdFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9
