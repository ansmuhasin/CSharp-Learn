namespace SingleTonProject
{
    sealed class SingleTon
    {
        static SingleTon Instance;
        private SingleTon()
        {
        }
        public static SingleTone GetInstance
        {
            get
            {
                if (Instance == null)
                {
                    Instance = new SingleTon();
                }

                return Instance;
            }
        }
    }
}