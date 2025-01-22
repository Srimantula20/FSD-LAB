function authenticateUser(userId, callback) {
    setTimeout(() => {
        console.log("User authenticated:", userId);
        callback(null, userId);
    }, 1000);
}

function verifyPaymentMethod(userId, callback) {
    setTimeout(() => {
        console.log("Payment method verified for user:", userId);
        callback(null, true);
    }, 1000);
}

function processPayment(userId, amount, callback) {
    setTimeout(() => {
        console.log(`Payment of $${amount} processed for user:`, userId);
        callback(null, amount);
    }, 1000);
}

function updateAccountBalance(userId, amount, callback) {
    setTimeout(() => {
        console.log(`Account balance updated for user: ${userId}, amount: $${amount}`);
        callback(null, true);
    }, 1000);
}

function notifyUser(userId, success, callback) {
    setTimeout(() => {
        console.log(`User ${userId} notified: Payment ${success ? "successful" : "failed"}`);
        callback(null, "Notification sent");
    }, 1000);
}

function processPaymentSystem(userId, amount) {
    authenticateUser(userId, (err, authResult) => {
        if (err) return console.error("Authentication failed");

        verifyPaymentMethod(authResult, (err, paymentVerified) => {
            if (err || !paymentVerified) return console.error("Payment method invalid");

            processPayment(authResult, amount, (err, processedAmount) => {
                if (err) return console.error("Payment processing failed");

                updateAccountBalance(authResult, processedAmount, (err, updated) => {
                    if (err || !updated) return console.error("Account balance update failed");

                    notifyUser(authResult, true, (err, notificationStatus) => {
                        if (err) return console.error("Notification failed");
                        console.log("Payment process completed successfully.");
                    });
                });
            });
        });
    });
}

processPaymentSystem("User123", 50);
