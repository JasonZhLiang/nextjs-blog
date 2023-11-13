export default function handler(req, res) {
    res.status(200).json({
        text: 'Hello',
        data: {
            name: 'Joseph',
            age: 25,
            email: 'joseph@email.com',
            phone: '09123456789',
            address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001'
            },
            hobbies: ['Sports', 'Cooking', 'Gaming'],
        },
    });
    // The API Route code will not be part of your client bundle, so you can safely write server-side code.
    const email = req.body.email;
    // Then save email to your database, etc...
}