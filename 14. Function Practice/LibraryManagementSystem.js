// Library Management System using Functions

console.log("========================================");
console.log("     📚 CITY CENTRAL LIBRARY SYSTEM");
console.log("========================================\n");

// Library catalog state
let libraryCatalog = [
    { id: "B101", title: "Clean Code", author: "Robert C. Martin", category: "Programming", isAvailable: true, issuedTo: null },
    { id: "B102", title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "Programming", isAvailable: true, issuedTo: null },
    { id: "B103", title: "Atomic Habits", author: "James Clear", category: "Self-Help", isAvailable: true, issuedTo: null },
    { id: "B104", title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", isAvailable: true, issuedTo: null }
];

// Transaction records
let issuedRecords = [];

// Add a new book to catalog
function addBook(id, title, author, category) {
    if (!id || !title || !author) {
        console.log("❌ [ERROR] Book details cannot be empty!");
        return false;
    }

    let existingBook = libraryCatalog.find(b => b.id.toLowerCase() === id.toLowerCase());
    if (existingBook) {
        console.log(`⚠️ [WARNING] Book with ID ${id} already exists!`);
        return false;
    }

    let newBook = {
        id: id,
        title: title,
        author: author,
        category: category || "General",
        isAvailable: true,
        issuedTo: null
    };

    libraryCatalog.push(newBook);
    console.log(`✅ [ADDED] "${title}" by ${author} [ID: ${id}] added to library.`);
    return true;
}

// Display available books
const displayAvailableBooks = () => {
    let availableBooks = libraryCatalog.filter(book => book.isAvailable);
    console.log("\n--- Available Books in Library ---");
    if (availableBooks.length === 0) {
        console.log("  No books available right now.");
        return;
    }

    availableBooks.forEach((book, index) => {
        console.log(`  ${index + 1}. [${book.id}] "${book.title}" by ${book.author} (${book.category})`);
    });
    console.log(`Total Available: ${availableBooks.length} / ${libraryCatalog.length}\n`);
};

// Search books by title or author
function searchBooks(searchTerm) {
    console.log(`🔍 [SEARCH] Query: "${searchTerm}"`);
    let term = searchTerm.toLowerCase();
    let results = libraryCatalog.filter(book => 
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.toLowerCase().includes(term)
    );

    if (results.length === 0) {
        console.log("  No matching books found.\n");
        return [];
    }

    results.forEach(b => {
        let status = b.isAvailable ? "Available" : `Issued to ${b.issuedTo}`;
        console.log(`  • [${b.id}] "${b.title}" by ${b.author} | Status: ${status}`);
    });
    console.log("");
    return results;
}

// Issue a book to member
const issueBook = (bookId, memberName) => {
    let book = libraryCatalog.find(b => b.id.toLowerCase() === bookId.toLowerCase());

    if (!book) {
        console.log(`❌ [FAILED] Book with ID "${bookId}" not found in catalog.`);
        return false;
    }

    if (!book.isAvailable) {
        console.log(`⚠️ [UNAVAILABLE] "${book.title}" is already issued to ${book.issuedTo}.`);
        return false;
    }

    book.isAvailable = false;
    book.issuedTo = memberName;

    issuedRecords.push({
        bookId: book.id,
        title: book.title,
        memberName: memberName,
        issueDate: new Date().toLocaleDateString()
    });

    console.log(`📖 [ISSUED] "${book.title}" successfully issued to ${memberName}.`);
    return true;
};

// Calculate late fine
function calculateFine(daysKept, allowedDays = 14, finePerDay = 5) {
    if (daysKept <= allowedDays) {
        return 0;
    }
    let overdueDays = daysKept - allowedDays;
    return overdueDays * finePerDay;
}

// Return a book
function returnBook(bookId, daysKept) {
    let book = libraryCatalog.find(b => b.id.toLowerCase() === bookId.toLowerCase());

    if (!book) {
        console.log(`❌ [FAILED] Invalid book ID "${bookId}".`);
        return null;
    }

    if (book.isAvailable) {
        console.log(`⚠️ [WARNING] "${book.title}" is already marked as available.`);
        return null;
    }

    let previousBorrower = book.issuedTo;
    let fineAmount = calculateFine(daysKept);

    book.isAvailable = true;
    book.issuedTo = null;

    console.log(`🔄 [RETURNED] "${book.title}" returned by ${previousBorrower}.`);
    console.log(`   Duration: ${daysKept} days (Allowed: 14 days)`);
    if (fineAmount > 0) {
        console.log(`   ⚠️ Late Fine: ₹${fineAmount} (Overdue by ${daysKept - 14} days)`);
    } else {
        console.log(`   ✅ Returned on time. No late fine applied.`);
    }

    return {
        bookId: book.id,
        title: book.title,
        borrower: previousBorrower,
        fine: fineAmount
    };
}

// Print summary report
function printLibrarySummary() {
    let total = libraryCatalog.length;
    let availableCount = libraryCatalog.filter(b => b.isAvailable).length;
    let issuedCount = total - availableCount;

    console.log("\n========================================");
    console.log("        📊 LIBRARY STATUS SUMMARY");
    console.log("========================================");
    console.log(`Total Catalog Books  : ${total}`);
    console.log(`Books Available      : ${availableCount}`);
    console.log(`Books Currently Out  : ${issuedCount}`);
    console.log("========================================\n");
}

// Demo Operations
addBook("B105", "The Pragmatic Programmer", "Andy Hunt & Dave Thomas", "Programming");
displayAvailableBooks();

searchBooks("Programmer");

console.log("--- Issuing Books ---");
issueBook("B101", "Aman Sharma");
issueBook("B103", "Priya Verma");
issueBook("B101", "Rohit Singh");

displayAvailableBooks();

console.log("--- Returning Books ---");
returnBook("B101", 10);
returnBook("B103", 20);

printLibrarySummary();
