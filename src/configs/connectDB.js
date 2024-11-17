const { Client } = require('pg');
const express = require('express')

// Database connection configuration
const client = new Client({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	port: '5432',
	database: 'NodeJs',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL:', err));



// Create a new PostgreSQL client

// client
// 	.connect()
// 	.then(() => {
// 		console.log('Connected to PostgreSQL database');

// 		// Execute SQL queries here

// 		client.query('SELECT * FROM users', (err, result) => {
// 			if (err) {
// 				console.error('Error executing query', err);
// 			} else {
// 				console.log('Query result:', result.rows);
// 			}

// 			// Close the connection when done
// 			client
// 				.end()
// 				.then(() => {
// 					console.log('Connection to PostgreSQL closed');
// 				})
// 				.catch((err) => {
// 					console.error('Error closing connection', err);
// 				});
// 		});
// 	})
// 	.catch((err) => {
// 		console.error('Error connecting to PostgreSQL database', err);
// 	});

module.exports = client;






	






