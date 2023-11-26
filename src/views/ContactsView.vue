<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactsView',
    data() {
        return {
            store,
            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null,
        }
    },

    methods: {
        sendForm() {
            this.loading = true;
            this.errors = [];
            this.success = null;

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }
            console.log(payload);
            axios.post(store.base_url + 'api/lead', payload)
                .then(response => {
                    const success = response.data.success
                    if (!success) {
                        this.errors = response.data.errors;
                    } else {

                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.phone = '';
                        this.success = response.data.message;

                    }

                    this.loading = false;
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
    },

}
</script>

<template>
    <div class="container pt-5">
        <div class="text-center mb-3">
            <h1>Do you want to send me a message?</h1>
            <h2>try my form!</h2>
            <!-- jumbo? -->
        </div>
        <div class="row">

            <div class="col-12 text-light">
                <form action="" v-on:submit.prevent="sendForm()">
                    <div class="mb-2">
                        <label for="name" class="form-label"><strong>Name:</strong></label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name"
                            aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">

                        <div class="d-flex justify-content-between">

                            <small id="nameHelper">enter your full name</small>
                            <small id="nameHelper" class="text-danger d-block" v-if="errors.name"
                                v-for="message in errors.name"> {{ message }}
                            </small>

                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="email" class="form-label"><strong>Email:</strong></label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="ezample@email.com" v-model="email" :class="{ 'is-invalid': errors.email }">

                        <div class="d-flex justify-content-between">

                            <small id="emailHelpId">Enter you email adress</small>
                            <small id="emailHelpId" class="text-danger d-block" v-if="errors.email"
                                v-for="message in errors.email"> {{ message }} </small>

                        </div>


                    </div>

                    <div class="mb-2">
                        <label for="phone" class="form-label"><strong>Phone Number:</strong></label>
                        <input type="tel" name="phone" id="phone" class="form-control" placeholder="type ur phone nunmber"
                            aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">

                        <div class="d-flex justify-content-between">

                            <small id="phoneHelper">Enter your phone number if u want </small>
                            <small id="phoneHelper" class="text-danger d-block" v-if="errors.phone"
                                v-for="message in errors.phone"> {{ message }} </small>

                        </div>


                    </div>

                    <div class="mb-2">
                        <label for="message" class="form-label"><strong>Message:</strong></label>
                        <textarea class="form-control" name="message" id="message" rows="3" aria-describedby="messageHelpId"
                            v-model="message" :class="{ 'is-invalid': errors.message }"></textarea>

                        <div class="d-flex justify-content-between">

                            <small id="messageHelpId">Leave me a message</small>
                            <small id="messageHelpId" class="text-danger d-block" v-if="errors.message"
                                v-for="message in errors.message">{{ message }}
                            </small>

                        </div>

                    </div>

                    <button class="btn btn-outline-light" type="submit" :disabled="loading">

                        <span v-if="loading">Sending <i class="fa-solid fa-circle-notch fa-spin"></i></span>
                        <span v-else>Send <i class="fa-solid fa-paper-plane"></i></span>

                    </button>
                    <span v-if="success" class="text-success mx-3">Your email has been sent</span>
                </form>
            </div>
            <div class="col-12 mt-4">
                <h3>still wanna know more aboout me?</h3>
                <ul class="list-unstyled fs-6 gap-3 d-flex flex-wrap mt-3">
                    <li>
                        <a href="https://github.com/AntoninoCucuzza" target="blank" class="icon-link text-light fs-1"><i
                                class="fa-brands fa-github fa-2xl"></i> GitHub</a>
                    </li>

                    <li>
                        <a href="https://github.com/AntoninoCucuzza" target="blank" class="icon-link text-light fs-1"><i
                                class="fa-brands fa-github fa-2xl"></i> GitHub</a>
                    </li>

                    <li>
                        <a href="https://github.com/AntoninoCucuzza" target="blank" class="icon-link text-light fs-1"><i
                                class="fa-brands fa-github fa-2xl"></i> GitHub</a>
                    </li>

                    <li>
                        <a href="https://github.com/AntoninoCucuzza" target="blank" class="icon-link text-light fs-1"><i
                                class="fa-brands fa-github fa-2xl"></i> GitHub</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
li {
    margin: 1rem;
}
</style>