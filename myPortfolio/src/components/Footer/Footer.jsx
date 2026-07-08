export const Footer = () => {
  return (
    <footer class="static bottom-0 bg-gray-600 shadow-md mt-4 p-1 w-full">
        <div class="flex justify-between px-2">
            <div class="flex-shrink-0 my-auto">
                <form class="flex flex-col" action="https://formsubmit.co/fikayopaul35@gmail.com" method="POST">

                    <input type="hidden" name="_captcha" value="true" />
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_template" value="box" />

                    <input type="text" placeholder="First Name" class="border bg-white" required /><br />

                    <input type="text" placeholder="Last Name" class="border bg-white" /><br />

                    <input type="text" placeholder="Suggestions, Feedback or Message" class="border bg-white w-100 h-20" required /><br />

                    <button type="submit" class="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 w-20">Send</button>
                </form>
            </div>
            <div class="flex my-auto mx-auto pb-8">
                <ul class="text-white flex flex-col items-center">
                    <li><p class ="font-bold text-gray-300 mb-4 underline">AUTHOR</p></li>
                    <li><a href="#About" class="py-4 hover:underline">About Me</a></li>
                    <li><a href="#Enquiries" class="py-4 hover:underline">Enquiries</a></li>
                    <li><a href="#Suggestions" class="py-4 hover:underline">Suggestions</a></li>
                    <li><a href="#Contact" class="py-4 hover:underline">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center mx-auto">
            <ul class="text-white hidden md:flex items-center space-x-2 p-2">
                <li><p>&copy; 2025 Fikayo Odumosu |</p></li>
                <li><a href="#Cookies" class="hover:underline">Cookie Policy |</a></li>
                <li><a href="#Privacy" class="hover:underline">Privacy Policy</a></li>
            </ul>

        </div>
    </footer>
  );
}