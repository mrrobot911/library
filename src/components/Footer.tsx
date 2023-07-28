const Footer = () => {
    return ( 
        <footer className="h-[250px] bg-black px-[20px] pt-[20px] text-white">
            <div className="flex justify-between text-[15px] leading-[20px] mb-[10px]">
                <p className="w-[229px] hover:text-[#BB945F] duration-200"><a target="_blank" href="https://yandex.ru/maps/202/new-york/search/286%20Cadman%20Plaza%2C%20New%20York%2C%20NY%2011238%2C%20United%20States/?ll=-73.969812%2C40.757180&sctx=ZAAAAAgBEAAaKAoSCXK%2FQ1Gg%2B0JAEfQ0YJD0BUhAEhIJgsgiTbwDzj8R9rLttDUiuD8iBgABAgMEBSgKOABAygFIAWISbGV0b192X2dvcm9kZT10cnVlagJydZ0BzcxMPaABAKgBAL0BCfdfIcIBBrXHy6f8BOoBAPIBAPgBAIICMzI4NiBDYWRtYW4gUGxhemEsIE5ldyBZb3JrLCBOWSAxMTIzOCwgVW5pdGVkIFN0YXRlc4oCAJICAzIwMpoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=-73.969812%2C40.757180&sspn=0.101362%2C0.046212&z=14.21">286 Cadman Plaza, New York, NY 11238, United States</a></p>
                <p className="text-end">Mon - Fri<br/> 08:00 am - 07:00 pm</p>
            </div>
            <div className="flex justify-between text-[15px] leading-[20px] mb-[30px]">
                <ul className="flex gap-[15px] items-center">
                    <li><a className="fill-[#F5EFDB] hover:fill-[#BB945F] duration-200" href="https://twitter.com/" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9912 3.95021C22.9913 3.77357 22.9447 3.60007 22.8559 3.44735C22.7671 3.29464 22.6395 3.16817 22.486 3.08084C22.3324 2.9935 22.1585 2.94842 21.9819 2.95017C21.8053 2.95193 21.6323 3.00046 21.4805 3.09083C20.8952 3.43921 20.265 3.70601 19.6075 3.88383C18.6685 3.07806 17.4708 2.63713 16.2335 2.64164C14.8761 2.6432 13.5724 3.17223 12.5977 4.11702C11.623 5.06181 11.0537 6.3484 11.0099 7.70512C8.33384 7.27838 5.90849 5.88164 4.19631 3.78126C4.09315 3.65609 3.9614 3.55757 3.81217 3.494C3.66295 3.43043 3.50062 3.40368 3.33889 3.41601C3.17725 3.42932 3.02128 3.4818 2.88448 3.56892C2.74768 3.65603 2.63416 3.77516 2.55373 3.91601C2.14126 4.63582 1.90436 5.44276 1.86228 6.27131C1.8202 7.09986 1.97412 7.92666 2.31154 8.68456L2.30959 8.68651C2.15794 8.77991 2.03278 8.91066 1.94609 9.06625C1.85941 9.22185 1.81409 9.39708 1.81447 9.57519C1.81263 9.72211 1.82145 9.86898 1.84084 10.0146C1.94298 11.2729 2.50062 12.4507 3.4092 13.3271C3.34756 13.4446 3.30994 13.5731 3.29854 13.7052C3.28714 13.8373 3.30218 13.9704 3.34279 14.0967C3.7389 15.3308 4.58129 16.3727 5.7051 17.0185C4.56334 17.46 3.33052 17.614 2.11525 17.4668C1.89032 17.4386 1.66248 17.4876 1.4691 17.6059C1.27572 17.7242 1.12828 17.9047 1.05097 18.1178C0.973654 18.3309 0.97106 18.5639 1.04361 18.7787C1.11616 18.9935 1.25955 19.1772 1.45025 19.2998C3.54034 20.646 5.97393 21.3617 8.46002 21.3613C11.2793 21.393 14.03 20.4921 16.2843 18.7988C18.5385 17.1054 20.17 14.7145 20.9248 11.998C21.2779 10.8146 21.4582 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3856 6.92668 22.6487 6.20527C22.9118 5.48387 23.0283 4.7172 22.9912 3.95021ZM19.6846 7.16212C19.5194 7.35746 19.4358 7.60891 19.4512 7.86427C19.461 8.02927 19.46 8.19527 19.46 8.35157C19.4579 9.39511 19.305 10.4329 19.0059 11.4326C18.3894 13.744 17.015 15.7817 15.103 17.2192C13.1909 18.6568 10.8517 19.4111 8.46002 19.3613C7.6009 19.3616 6.74474 19.2606 5.90924 19.0606C6.97465 18.7172 7.97083 18.1879 8.85162 17.4971C9.01385 17.3693 9.13257 17.1945 9.19151 16.9967C9.25044 16.7988 9.2467 16.5875 9.18079 16.3918C9.11489 16.1961 8.99005 16.0257 8.8234 15.9038C8.65675 15.7819 8.45647 15.7145 8.25002 15.7109C7.41885 15.698 6.62515 15.363 6.03615 14.7764C6.18557 14.7481 6.33401 14.7129 6.48147 14.6709C6.69748 14.6094 6.88651 14.477 7.01813 14.295C7.14975 14.1131 7.21629 13.8921 7.20704 13.6677C7.1978 13.4433 7.1133 13.2285 6.96715 13.058C6.82101 12.8874 6.62173 12.7711 6.40139 12.7275C5.91893 12.6323 5.46494 12.427 5.0747 12.1277C4.68447 11.8284 4.36852 11.4432 4.15139 11.002C4.33212 11.0266 4.514 11.0419 4.69631 11.0479C4.91289 11.0511 5.1249 10.9854 5.30169 10.8603C5.47847 10.7351 5.61086 10.5569 5.67971 10.3516C5.74569 10.1443 5.74229 9.92123 5.67004 9.7161C5.59778 9.51096 5.46061 9.33499 5.27932 9.21485C4.83947 8.92182 4.47916 8.52427 4.23068 8.0578C3.98219 7.59134 3.85328 7.07052 3.85549 6.54201C3.85549 6.47561 3.85744 6.4092 3.86135 6.34377C6.10261 8.43402 9.00967 9.66621 12.0703 9.82326C12.2248 9.82934 12.3787 9.80024 12.5203 9.73816C12.6619 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0929 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0366 8.35806 13.0074 8.11357 13.0068 7.86818C13.0077 7.01271 13.348 6.19254 13.9529 5.58764C14.5578 4.98274 15.378 4.64251 16.2334 4.64161C16.6736 4.64043 17.1092 4.7305 17.5127 4.90615C17.9163 5.0818 18.2791 5.3392 18.5781 5.66212C18.6935 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3329 5.99303 19.499 5.96001C19.9098 5.88006 20.3147 5.7724 20.7109 5.63775C20.4407 6.19072 20.0953 6.70369 19.6846 7.16212Z"/>
                        </svg></a></li>
                    <li><a className="fill-[#F5EFDB] hover:fill-[#BB945F] duration-200" href="https://instagram.com/" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"/>
                        </svg></a></li>
                    <li><a className="fill-[#F5EFDB] hover:fill-[#BB945F] duration-200" href="https://facebook.com/" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"/>
                        </svg></a></li>
                </ul>
                <p className="text-end">Sat - Sun<br/> 10:00 am - 06:00 pm</p>
            </div>
            <hr/>
            <div className="flex justify-between mt-[44px] text-[20px] tracking-[2px]">
                <p>2023</p>
                <p><a className="hover:text-[#BB945F] duration-200" href="https://rs.school/js-stage0/" target="_blank">The Rolling Scopes School</a></p>
                <p><a className="hover:text-[#BB945F] duration-200" href="https://github.com/mrrobot911" target="_blank">kelwin</a></p>
            </div>
        </footer>
     );
}
 
export default Footer;