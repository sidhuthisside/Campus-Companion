// API Service for Campus Companion Frontend
// This file handles all communication with the backend

class CampusCompanionAPI {
    constructor() {
        // Use same-origin with configured context path
        const origin = window.location.origin;
        const context = '/campus-companion';
        this.baseURL = `${origin}${context}`;
        this.apiEndpoints = {
            health: '/health',
            users: '/user',
            departments: '/department',
            procedures: '/procedure',
            faqs: '/faq',
            tips: '/tip'
        };
    }

    // Generic API call method
    async makeRequest(endpoint, method = 'GET', data = null) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            const options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include' // Include cookies for session management
            };

            if (data && (method === 'POST' || method === 'PUT')) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // Test connection to backend
    async testConnection() {
        try {
            const url = `${this.baseURL}${this.apiEndpoints.health}`;
            const response = await fetch(url, { credentials: 'include' });
            if (response.ok) {
                return { status: 'success', message: 'Backend is healthy' };
            }
            return { status: 'error', message: `Health check failed: ${response.status}` };
        } catch (error) {
            console.error('Backend connection test failed:', error);
            throw error;
        }
    }

    // User Management APIs
    async loginUser(username, password) {
        const formData = new FormData();
        formData.append('action', 'login');
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch(`${this.baseURL}/user`, {
                method: 'POST',
                body: formData
            });
            return await response.text();
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    async registerUser(userData) {
        const formData = new FormData();
        formData.append('action', 'register');
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('firstName', userData.firstName);
        formData.append('lastName', userData.lastName);
        formData.append('phoneNumber', userData.phoneNumber);
        formData.append('role', userData.role);

        try {
            const response = await fetch(`${this.baseURL}/user`, {
                method: 'POST',
                body: formData
            });
            return await response.text();
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    }

    async getAllUsers() {
        return await this.makeRequest(`${this.apiEndpoints.users}?action=list`);
    }

    // Department Management APIs
    async getAllDepartments() {
        try {
            const response = await fetch(`${this.baseURL}${this.apiEndpoints.departments}?action=list`, { credentials: 'include' });
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch departments:', error);
            return [];
        }
    }

    async getDepartmentById(id) {
        return await this.makeRequest(`${this.apiEndpoints.departments}?action=view&id=${id}`);
    }

    // Procedure Management APIs
    async getAllProcedures() {
        try {
            const response = await fetch(`${this.baseURL}${this.apiEndpoints.procedures}?action=list`, { credentials: 'include' });
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch procedures:', error);
            return [];
        }
    }

    async getProceduresByCategory(category) {
        try {
            const response = await fetch(`${this.baseURL}/procedure?action=category&category=${category}`);
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch procedures by category:', error);
            return [];
        }
    }

    // FAQ Management APIs
    async getAllFAQs() {
        try {
            const response = await fetch(`${this.baseURL}${this.apiEndpoints.faqs}?action=list`, { credentials: 'include' });
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch FAQs:', error);
            return [];
        }
    }

    async searchFAQs(searchTerm) {
        try {
            const response = await fetch(`${this.baseURL}/faq?action=search&q=${encodeURIComponent(searchTerm)}`);
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to search FAQs:', error);
            return [];
        }
    }

    // Tips Management APIs
    async getAllTips() {
        try {
            const response = await fetch(`${this.baseURL}${this.apiEndpoints.tips}?action=list`, { credentials: 'include' });
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch tips:', error);
            return [];
        }
    }

    async getTipsByCategory(category) {
        try {
            const response = await fetch(`${this.baseURL}/tip?action=category&category=${category}`);
            if (response.ok) {
                return await response.json();
            }
            return [];
        } catch (error) {
            console.error('Failed to fetch tips by category:', error);
            return [];
        }
    }

    // Utility methods
    async checkBackendConnection() {
        try {
            const response = await fetch(`${this.baseURL}${this.apiEndpoints.health}`, { credentials: 'include' });
            return response.ok;
        } catch (error) {
            console.error('Backend connection check failed:', error);
            return false;
        }
    }

    // Error handling
    handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        // You can add user-friendly error messages here
        return {
            success: false,
            message: `Failed to ${context}. Please try again.`
        };
    }
}

// Create global API instance
window.CampusAPI = new CampusCompanionAPI();

// Utility functions for easy use
window.loadDepartments = async function() {
    try {
        const departments = await window.CampusAPI.getAllDepartments();
        displayDepartments(departments);
    } catch (error) {
        console.error('Failed to load departments:', error);
    }
};

window.loadProcedures = async function() {
    try {
        const procedures = await window.CampusAPI.getAllProcedures();
        displayProcedures(procedures);
    } catch (error) {
        console.error('Failed to load procedures:', error);
    }
};

window.loadFAQs = async function() {
    try {
        const faqs = await window.CampusAPI.getAllFAQs();
        displayFAQs(faqs);
    } catch (error) {
        console.error('Failed to load FAQs:', error);
    }
};

window.loadTips = async function() {
    try {
        const tips = await window.CampusAPI.getAllTips();
        displayTips(tips);
    } catch (error) {
        console.error('Failed to load tips:', error);
    }
};

// Display functions (you'll need to implement these based on your HTML structure)
function displayDepartments(departments) {
    const container = document.querySelector('.departments-grid');
    if (!container || !Array.isArray(departments)) return;
    container.innerHTML = '';
    departments.forEach(dep => {
        const card = document.createElement('a');
        card.className = 'department-card';
        card.href = 'department-detail.html';
        card.innerHTML = `
            <div class="department-icon">
                <i class="fas fa-building"></i>
            </div>
            <h3>${dep.name || 'Department'}</h3>
            <p>${dep.description || ''}</p>
            <div class="department-meta">
                <span><i class="fas fa-user-graduate"></i> ${dep.numFaculty || ''} Faculty</span>
                <span><i class="fas fa-book"></i> ${dep.numCourses || ''} Courses</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function displayProcedures(procedures) {
    const container = document.querySelector('.procedures-list, .procedure-steps');
    if (!container || !Array.isArray(procedures)) return;
    // If a dedicated list exists, render summaries; otherwise, keep existing rich content
    if (container.classList.contains('procedures-list')) {
        container.innerHTML = '';
        procedures.forEach(proc => {
            const item = document.createElement('div');
            item.className = 'procedure-item';
            item.innerHTML = `
                <h4>${proc.title || 'Procedure'}</h4>
                <p>${proc.summary || ''}</p>
            `;
            container.appendChild(item);
        });
    }
}

function displayFAQs(faqs) {
    const accordion = document.querySelector('.accordion');
    if (!accordion || !Array.isArray(faqs)) return;
    accordion.innerHTML = '';
    faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        if (faq.category) item.setAttribute('data-category', faq.category);
        item.innerHTML = `
            <div class="accordion-header">
                <h3>${faq.question || ''}</h3>
                <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
                <p>${faq.answer || ''}</p>
            </div>
        `;
        accordion.appendChild(item);
    });
}

function displayTips(tips) {
    const container = document.querySelector('.tips-container');
    if (!container || !Array.isArray(tips)) return;
    container.innerHTML = '';
    tips.forEach(tip => {
        const card = document.createElement('div');
        card.className = 'tip-card';
        if (tip.category) card.setAttribute('data-category', tip.category);
        card.innerHTML = `
            <div class="tip-icon"><i class="fas fa-lightbulb"></i></div>
            <h3>${tip.title || 'Tip'}</h3>
            <p>${tip.content || ''}</p>
            <div class="tip-tags">
                ${tip.category ? `<span class="tag">${tip.category}</span>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}
