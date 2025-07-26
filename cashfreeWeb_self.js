const cashfree = Cashfree({
    mode: "sandbox",
});

document.getElementById("buyPremiumBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/pay", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        const paymentSessionId = data.paymentSessionId;

        let checkoutOptions = {
            paymentSessionId: paymentSessionId,
            redirectTarget: "_self",
        };

        await cashfree.checkout(checkoutOptions);

    } catch (error) {
        console.error("Error initiating payment:", error);
        alert("Failed to initiate payment. Please try again.");
    }
});