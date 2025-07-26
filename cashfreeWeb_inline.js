
document.getElementById("renderBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/pay", {
            method: "POST",
        });

        const data = await response.json();
        const paymentSessionId = data.paymentSessionId;
        const orderId = data.orderId; // Make sure orderId is returned from backend

        let checkoutOptions = {
            paymentSessionId: paymentSessionId,
            redirectTarget: document.getElementById("cf_checkout"),
            appearance: {
                width: "325px",
                height: "325px",
            },
        };

        const result = await cashfree.checkout(checkoutOptions);

        if (result.error) {
            console.log("User has closed the popup or there is some payment error. Check for details:");
            console.log(result.error);
        }

        if (result.redirect) {
            console.log("Payment will be redirected.");
        }

        if (result.paymentDetails) {
            console.log("Payment has been completed. Check for Payment Status.");
            console.log(result.paymentDetails.paymentMessage);

            const statusResponse = await fetch('http://localhost:3000/payment-status/${orderId}', {
                method: "GET",
            });

            const statusData = await statusResponse.json();
            alert("Your payment is " + statusData.orderStatus);
        }

    } catch (err) {
        console.error("Error:", err);
    }
});