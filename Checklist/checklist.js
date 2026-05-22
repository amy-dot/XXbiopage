const activityItems = {
  camping: [
    "Tent",
    "Sleeping Bag",
    "Flashlight",
    "Water Bottle",
    "Snacks",
    "First Aid Kit"
  ],

  beach: [
    "Towel",
    "Sunscreen",
    "Swimsuit",
    "Sunglasses",
    "Flip Flops",
    "Water Bottle"
  ],

  school: [
    "Notebook",
    "Laptop",
    "Pencils",
    "Backpack",
    "Charger"
  ],

  gym: [
    "Workout Clothes",
    "Sneakers",
    "Water Bottle",
    "Headphones",
    "Towel"
  ],

  travel: [
    "Passport/ID",
    "Phone Charger",
    "Wallet",
    "Tickets",
    "Clothes"
  ],

  picnic: [
    "Blanket",
    "Snacks",
    "Drinks",
    "Napkins",
    "Plates"
  ]
};

function generateChecklist() {
  const activity = document
    .getElementById("activityInput")
    .value
    .toLowerCase()
    .trim();

  const checklist = document.getElementById("checklist");

  checklist.innerHTML = "";

  let items = activityItems[activity];

  if (!items) {
    items = ["Phone", "Wallet", "Water Bottle"];
  }

  items.forEach(item => {
    createChecklistItem(item);
  });
}

function createChecklistItem(text) {
  const checklist = document.getElementById("checklist");

  const li = document.createElement("li");

  const leftDiv = document.createElement("div");
  leftDiv.className = "item-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  checkbox.addEventListener("change", () => {
    span.classList.toggle("checked");
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  checklist.appendChild(li);
}

function addCustomItem() {
  const input = document.getElementById("customItemInput");

  const text = input.value.trim();

  if (text !== "") {
    createChecklistItem(text);

    input.value = "";
  }
}