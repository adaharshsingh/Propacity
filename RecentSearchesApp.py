import tkinter as tk

# Track recent searches
recent_searches = []

# Function to update buttons dynamically
def update_buttons():
    for i, button in enumerate(buttons):
        if i < len(recent_searches):
            button.config(text=recent_searches[i])
        else:
            button.config(text="No recent searches")

# Event listener for search input
def handle_search(event):
    search_term = search_entry.get()
    # Add the new search to the beginning of the list
    recent_searches.insert(0, search_term)
    # Remove the oldest search if the list exceeds three items
    if len(recent_searches) > 3:
        recent_searches.pop()
    # Update buttons
    update_buttons()
    # Clear the search entry
    search_entry.delete(0, tk.END)

# Create the main window
window = tk.Tk()
window.title("Recent Searches")

# Create buttons with larger dimensions
button_width = 20  # Adjust the width as needed
button_height = 2  # Adjust the height as needed
buttons = [tk.Button(window, text="No recent searches", width=button_width, height=button_height) for _ in range(3)]
for button in buttons:
    button.pack()


search_entry_width = 100 # Adjust the width as needed
search_entry = tk.Entry(window, width=search_entry_width)
search_entry.pack()
search_entry.bind("<Return>", handle_search)

# Initial update
update_buttons()

# Start the main loop
window.mainloop()