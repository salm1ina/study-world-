import tkinter as tk

window= tk.Tk()
lebar =400
tinggi =600
x =500
y =100

window.title("Coba gais")

screenwidth = window.winfo_screenwidth()
screenheight = window.winfo_screenheight()
newx = int((screenwidth/2) - (lebar/2))
newy = int((screenheight/2) - (tinggi/2))

window.geometry(f"{lebar}x{tinggi}+{newx}+{newy}")

window.mainloop()